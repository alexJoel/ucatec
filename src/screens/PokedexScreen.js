import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function PokedexScreen(props) {
    const{navigation} = props;
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState([null]);
    //  console.log('pokemons: ',pokemons);
    console.log(nextUrl);
    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonApi(nextUrl);
            setNextUrl(response.next)
            const pokemonsArray = [];

            for await (const pokemon of response.results) {
                const pokemonsDetails = await getPokemonDetailsByUrlApi(pokemon.url);
                //console.log(pokemonsDetails);
                pokemonsArray.push({
                    id: pokemonsDetails.id,
                    name: pokemonsDetails.name,
                    type: pokemonsDetails.types[0].type.name,
                    image: pokemonsDetails.sprites.other['official-artwork'].front_default,
                })
            }
            setPokemons([...pokemons, ...pokemonsArray])
            // console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView>
            {/*<Text>PokedexScreen</Text>*/}
            <PokemonList 
                pokemons={pokemons}
                loadPokemons={loadPokemons}
                isNext={nextUrl}></PokemonList>
        </SafeAreaView>
    )
}