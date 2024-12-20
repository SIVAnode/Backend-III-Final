import { Router } from "express";
import { generateMockPets } from "../mock/mocking.js";
import { generateMockUsers } from "../mock/mocking.js";
import {adoptionsService, petsService, usersService} from "../services/index.js";

const router = Router();

router.get('/mockingpets', (req, res) => {
    const numPets = parseInt(req.query.num) || 100;
    const mockPets = generateMockPets(numPets);
    res.send({ status: 'success', payload: mockPets });
});

router.get('/mockingusers', async (req, res) => {
    const numUsers = parseInt(req.query.num) || 50;
    const mockUsers = await generateMockUsers(numUsers);
    res.send({ status: 'success', payload: mockUsers });
});

router.post('/generateData', async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body;

        const mockUsers = await generateMockUsers(users);
        const mockPets = generateMockPets(pets);

        const createdUsers = await Promise.all(mockUsers.map(user => usersService.create(user)));
        const createdPets = await Promise.all(mockPets.map(pet => petsService.create(pet)));

        const adoptions = [];
        for (let i = 0; i < Math.min(createdUsers.length, createdPets.length); i++) {
            adoptions.push({
                owner: createdUsers[i % createdUsers.length]._id,
                pet: createdPets[i]._id
            });
        }

        await Promise.all(adoptions.map(adoption => adoptionsService.create(adoption)));

        res.send({
            status: 'success',
            message: "10 usuarios y 20 mascotas han sido insertadas exitosamente a la base de datos"
        });
    } catch (error) {
        console.error("Error generating data:", error);
        res.status(500).send({ status: 'error', message: 'Internal server error' });
    }
});

export default router;