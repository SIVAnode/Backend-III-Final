import { Router } from 'express';
import logger from '../utils/logger.js';

const router = Router();

router.get('/loggerTest', (req, res) => {
    logger.emerg('Emergency level log');
    logger.alert('Alert level log');
    logger.crit('Critical level log');
    logger.error('Error level log');
    logger.warning('Warning level log');
    logger.notice('Notice level log');
    logger.info('Information level log');
    logger.debug('Debug level log');

    res.send({ status: 'success', message: 'Logs generados correctamente' });
});

export default router;