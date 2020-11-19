import { DigimonI } from "../interfaces/DigimonInterfaces";
const db = require('../db/Digimons.json');

module DigimonsService {
    export function getAll(): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        return digimons
    }
    export function get(id: number): DigimonI {
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }
    export function getByName(name: string): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        const matches: Array<DigimonI> = digimons.filter(function(el) {
            return el.name.indexOf(name.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el digimon"
        }
        return matches;
    }
    export function getByType(type: string): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        let matches: Array<DigimonI> = [];
        digimons.forEach(digimon => {
            const found = digimon.type.filter(e => e.name === type);
            console.log("este es el digimon"+digimon)
            console.log("este es found"+found.values)
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

    export function getPowerDigimon(name: string): Array<DigimonI> {
        const Digimons: Array<DigimonI> = db;
        let StrongerThan: Array<DigimonI> = [];
        let WeakerThan: Array<DigimonI> = [];
        let digimon: Array<DigimonI> = Digimons.filter(function (el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })

        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        } else {
            digimon = digimon.filter(function(el) {
                const nombre = el.name;
                const status = el.type.filter(e =>{
                    let tipo = e.name;
                    digimon.forEach(digimon => {
                        const comparation = digimon.type.filter(z =>{
                            for (let i = 0; i < z.weakAgainst.length; i++) {
                                const element = z.weakAgainst[i];
                                if (element.toString() == tipo){
                                    StrongerThan.push(digimon);
                                }
                            }
                            for (let j = 0; j < z.strongAgainst.length; j++) {
                                const element2 = z.strongAgainst[j];
                               /* console.log("Compare");
                                console.log(element2);
                                console.log(tipo);*/
                                if ( element2.toString() == tipo){
                                    console.log("Entre en if")
                                    WeakerThan.push(digimon);
                                }
                            }
                        })
                    })
                    console.log(StrongerThan);
                    console.log(WeakerThan);
                    StrongerThan.filter(name =>{
                       const nombreFuerte  = name.name;
                       WeakerThan.filter(name =>{
                        const nombreDebil = name.name;
                        throw "Nombre: " + nombre + " tipo: "+ e.name + " es fuerte contra: " + nombreFuerte + " pero es débil contra: " + nombreDebil;
                       })
                    })
                })
            });
            console.log(StrongerThan);
            console.log(WeakerThan);
            return digimon;
        }

    }
    export function newDigimon(name: string): Array<DigimonI> {
        // const writeJsonFile = require('bit/global/write-json-file');
        // writeJsonFile(db,{isThisReal:PokemonsService,author:PokemonsService}).catch((err: any) =>{console.log(err)} );
        var splitted = name.split(",");
        // var nP = {"Nombre":splitted[0],"tipo":splitted[1],"strongAgainst":splitted[2],"weakAgainst":splitted[3],"img": splitted[4]} ;
        // var local = localStorage.setItem('NewPokemon', JSON.stringify(nP));

        throw "Nombre: "+splitted[0]+ " tipo: " +splitted[1]+ " es fuerte contra " +splitted[2]+ " es debil contra " +splitted[3]+ " img " + splitted[4];
        throw "";
        // console.log(local);
        // nP = JSON.parse(localStorage.getItem('NewPokemon'));
        // throw nP
    //     const fs = require('fs');
    //    const vaildateJson = require('bit/global/json-validator');

    //    const writeToFile = (file: any,data: any) => {
    //      const jsonStr =  (nP  instanceof Object) ? JSON.stringify(nP,null,4) : nP ;
    //      return vaildateJson(jsonStr)
    //        .then((jsonStr:any) =>
    //          new Promise((resolve, reject) => {
    //            fs.writeFile(`${file}`, jsonStr, 'utf-8', function(err:any) {
    //              if (err) reject(err);
    //              else resolve(jsonStr);
    //            });
    //          }))
    //    }
    //    console.log(writeToFile);
    //    throw writeToFile
    }

}

export default DigimonsService;