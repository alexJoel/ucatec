import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import PokemonCards from './PokemonCards';

export default function PokemonList(props) {
    const {pokemons, isNext, loadPokemons } = props;
    const loadMore = () => {
        loadPokemons();
    }
  return (
    <FlatList
        data = { pokemons }
        numColumns={2}
        showVerticalScrollIndicator={false}
        keyExtractor= {(pokemon)=> String(pokemon.id)}
        renderItem={({item})=> <PokemonCards pokemon={item}></PokemonCards>}
        contentContainerStyle = {styles.flatlistContentContainer} 
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
            isNext && (<ActivityIndicator
                    size="Large"
                    style = {styles.spinner}
                    color= "#AEAEAE"
                />)
            }
        >
    </FlatList>
  )
}

const styles = StyleSheet.create({
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
    flatListContentContainer: {
        paddingHorizontal: 5
    }
})