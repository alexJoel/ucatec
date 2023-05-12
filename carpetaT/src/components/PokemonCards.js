import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function PokemonCards(props) {
  const {pokemon} = props;

  const goToPokemon = () => {
    console.log('Vamos al pokemon: ',pokemon.name);
    console.log(pokemon);
  }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <Text>PokemonCard</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130
  }
})