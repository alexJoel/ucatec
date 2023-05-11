import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import PokemonCards from './PokemonCards';

export default function PokemonList(props) {
    const {pokemons} = props;
  return (
    <FlatList
        data = { pokemons }
        numColumns={2}
        showVerticalScrollIndicator={false}
        keyExtractor= {(pokemon)=> String(pokemon.id)}
        renderItem={({item})=> <PokemonCards pokemon={item}></PokemonCards>}
        contentContainerStyle = {styles.flatlistContentContainer} >
    </FlatList>
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})