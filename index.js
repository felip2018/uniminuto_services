'use strict';

module.exports.handler = (event, context, callback) => {
    console.log("EVENTO > ", event);
    
    let response;
    
    if (event.path === "/uniminuto_services/get-pokemons") {
        
        let requestBody = {
            message: "Welcome to get pokemons",
            result: getPokemonsList()
        }
        
        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(requestBody)
        }
        
        callback(null, response);
    }
    
    if (event.path === "/uniminuto_services/login") {
        
        console.log('Launch login');
        
        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(event.body)
        }
        
        callback(null, response);
    }
    
    
}

const getPokemonsList = () => {
    return {
        list: [
            {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/3/"
            },
            {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon-species/4/"
            },
            {
                "name": "charmeleon",
                "url": "https://pokeapi.co/api/v2/pokemon-species/5/"
            },
            {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon-species/6/"
            },
            {
                "name": "squirtle",
                "url": "https://pokeapi.co/api/v2/pokemon-species/7/"
            },
            {
                "name": "wartortle",
                "url": "https://pokeapi.co/api/v2/pokemon-species/8/"
            }
        ]
    }
}