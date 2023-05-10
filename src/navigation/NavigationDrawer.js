import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen name='Setting' component={SettingsScreen}></Drawer.Screen>
    </Drawer.Navigator>
  )
}