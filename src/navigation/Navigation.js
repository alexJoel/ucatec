import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoriteScreen from '../screens/FavoriteScreen';
import PokedexScreen from '../screens/PokedexScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';
import FavoriteNavigation from './FavoriteNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
        <Tab.Screen name='Account' component={AccountNavigation} options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name="address-book" color={color} size={size} />
          ),
        }}></Tab.Screen>
        <Tab.Screen name='Pokedex' component={PokedexScreen} options={{
          tabBarLabel: '',
          tabBarIcon: () => imagePokeball()
        }}></Tab.Screen>
        <Tab.Screen name='Favorite' component={FavoriteNavigation} options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  )
}

function imagePokeball() {
  return (
    <Image 
      source={require("../assets/pokeball.png")}
      style={{width: 60, height: 60, top:-15}}
    ></Image>
  )
}