import winston from 'winston';
import path from 'path';

const customLevels = {
    levels: {
        emerg: 0,
        alert: 1,
        crit: 2,
        error: 3,
        warning: 4,
        notice: 5,
        info: 6,
        debug: 7,
    },
    colors: {
        emerg: 'red bold',
        alert: 'red',
        crit: 'red',
        error: 'red',
        warning: 'yellow',
        notice: 'blue',
        info: 'green',
        debug: 'cyan',
    },
};


const logFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
});


const createLogger = (env) => {
    const transports = [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                logFormat
            ),
            level: env === 'production' ? 'info' : 'debug',
        }),
    ];

    if (env === 'production') {
        transports.push(
            new winston.transports.File({
                filename: path.join('logs', 'errors.log'),
                level: 'error',
                format: winston.format.combine(winston.format.timestamp(), logFormat),
            })
        );
    }

    return winston.createLogger({
        levels: customLevels.levels,
        transports,
    });
};

const logger = createLogger(process.env.NODE_ENV || 'development');

winston.addColors(customLevels.colors);

export default logger;