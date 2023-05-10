import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from '../screens/AccountScreen';
import PokedexScreen from '../screens/PokedexScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Account' component={AccountScreen}></Drawer.Screen>
        <Drawer.Screen name='Pokedex' component={PokedexScreen}></Drawer.Screen>
        <Drawer.Screen name='Favorite' component={FavoriteScreen}></Drawer.Screen>
    </Drawer.Navigator>
  )
}