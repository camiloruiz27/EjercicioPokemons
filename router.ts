import express from 'express';
import * as DigimonsController from './src/controllers/DigimonsController';
import * as PokemonController from './src/controllers/DigimonsController';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with Typescript!')
})

router.get('/ts', (req, res) => {
    res.send('Typescript es lo máximo!')
})

router.get('/digimons', DigimonsController.getAll);
router.get('/pokemons', PokemonController.getAll);
router.get('/digimons/:id', DigimonsController.get);
router.get('/pokemons/:id', PokemonController.get);
router.get('/digimons/name/:name', DigimonsController.getByName);
router.get('/pokemons/name/:name', PokemonController.getByName);
router.get('/digimons/type/:type', DigimonsController.getByType);
router.get('/pokemons/type/:type', PokemonController.getByType);
router.get('/digimons/power/:name', DigimonsController.getByPower);
router.get('/pokemons/power/:name', PokemonController.getByPower);
router.get('/digimons/new/:name', DigimonsController.getNew);
router.get('/pokemons/new/:name', PokemonController.getNew);

router.post("/", (req, res) => {
    console.log("Cuerpo:", req.body);
    res.status(200).send(req.body);
});

