import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require('../db/Pokemons.json');
const pokemons: Array<PokemonI> = db;
module PokemonService {
    export function getAll(): Array<PokemonI> {
        return pokemons
    }
    export function get(id: number): PokemonI {
        const pokemon: Array<PokemonI> = pokemons.filter(e => e.number === id);
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon[0];
    }
    export function getByName(name: string): Array<PokemonI> {
        const matches: Array<PokemonI> = pokemons.filter(function(el) {
            return el.name.indexOf(name.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el pokemon"
        }
        return matches;
    }
    export function getByType(type: string): Array<PokemonI> {
        let matches: Array<PokemonI> = [];
        pokemons.forEach(digimon => {
            const found = digimon.type.filter(e => e.name === type);
  //          console.log("este es el pokemon"+digimon)
  //          console.log("este es found"+found.values)
            if (found.length>0) {
                matches.push(digimon);
            }
            console.log("este el matches"+matches.values)
        })
        if (matches.length < 1) {
            throw "No se encontró el tipo"
        }
        return matches;
    }
    export function getAgainstPokemon(name: string): Array<PokemonI> {
        let matchesStrong: Array<PokemonI> = [];
        let matchesWeak: Array<PokemonI> = [];
        let pokemon: Array<PokemonI> = pokemons.filter(function (el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })

        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        } else {
            pokemon = pokemon.filter(function(el) {
                const nombre = el.name;
                const status = el.type.filter(e =>{
                    let tipo = e.name;
                    pokemons.forEach(pokemon => {
                        const comparation = pokemon.type.filter(z =>{
                            for (let i = 0; i < z.weakAgainst.length; i++) {
                                const element = z.weakAgainst[i];
                                if (element.toString() == tipo){
                                    matchesStrong.push(pokemon);
                                }
                            }
                            for (let j = 0; j < z.strongAgainst.length; j++) {
                                const element2 = z.strongAgainst[j];
                                console.log("Compare");
                                console.log(element2);
                                console.log(tipo);
                                if ( element2.toString() == tipo){
                                    console.log("Entre en if")
                                    matchesWeak.push(pokemon);
                                }
                            }
                        })
                    })
                    console.log(matchesStrong);
                    console.log(matchesWeak);
                    matchesStrong.filter(name =>{
                       const nombreFuerte  = name.name;
                       matchesWeak.filter(name =>{
                        const nombreDebil = name.name;
                        throw "El Pokemon: " + nombre + " tipo: "+ e.name + "es débil contra: " + nombreDebil+" y es fuerte contra: " + nombreFuerte;
                       })
                    })
                })
            });
            console.log(matchesStrong);
            console.log(matchesWeak);
            return pokemon;
        }

    }
    export function getNewPokemon(name: string): Array<PokemonI> {
        var splitted = name.split(",");
        throw "Nombre: "+splitted[0]+ " tipo: " +splitted[1]+ " es fuerte contra " +splitted[2]+ " es debil contra " +splitted[3]+ " img " + splitted[4];
    }

}

export default PokemonService;
