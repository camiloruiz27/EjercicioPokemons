import { Request, Response } from "express";
import PokemonService from "../services/PokemonService";

export function getAll(_: any, res: Response) {
    const pockemons = PokemonService.getAll();
    res.status(200).json(pockemons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el numero de Pokemon."}
        const pockemons = PokemonService.get(id);
        res.status(200).json(pockemons);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getByName(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere el nombre(name) del Pokemon."}
        const pockemons = PokemonService.getByName(name);
        res.status(200).json(pockemons);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getByType(req: Request, res: Response) {
    try {
        const type = req.params.type && req.params.type || undefined;
        if(!type){ throw "Se requiere el Tipo de Pokemon."}
        const pockemons = PokemonService.getByType(type);
        res.status(200).json(pockemons);
    } catch (error) {
        res.status(400).send(error);
    }
}
export function getByPower(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere el nombre del pokemon para comparar."}
        const pockemons = PokemonService.getAgainstPokemon(name);
        res.status(200).json(pockemons);
    } catch (error) {
        res.status(400).send(error);
    }
}
export function getNew(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name;
        const pockemons = PokemonService.getNewPokemon(name);
        res.status(200).json(pockemons);
    } catch (error) {
        res.status(400).send(error);
    }
}