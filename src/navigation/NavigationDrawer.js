import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
const Drawer = createDrawerNavigator();
export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name='Profile' component={ProfileScreen}></Drawer.Screen>
        <Drawer.Screen name='Setting' component={SettingScreen}></Drawer.Screen>
    </Drawer.Navigator>
  )
}