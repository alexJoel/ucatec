import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../utils/getColorByPokemon'
import { capitalize } from 'lodash'

export default function PokemonCards(props) {
    const { pokemon } = props;
    console.log(pokemon);
    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyle };
    const goToPokemon = () => {
        console.log('Vamos al pokemon: ', pokemon.name);
        console.log(pokemon);
    }
    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>
                            #{`${pokemon.id}`.padStart(2, 0)}
                        </Text>
                        <View style={{ flex: 0, paddingRight: 10 }}>
                            <Image style={styles.image} source={{ uri: pokemon.image }} />
                        </View>
                        <Text style={styles.name}> {pokemon.name}</Text>
                        <Text style={styles.name}> {pokemon.type}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
        paddingBottom: 20,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyle: {
        //backgroundColor: 'grey',
        borderRadius: 10,
        height: 120
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
    },
    image: {
        position: 'absolute',
        top: 30,
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
        borderRadius: 5,
    },
});

