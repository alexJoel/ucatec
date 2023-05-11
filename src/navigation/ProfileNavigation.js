
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
//import profileScreen from '../screens/profileScreen';
//import homeScreen from '../screens/homeScreen';
//import settingScreen from '../screens/settingScreen';

const Stack = createNativeStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name= "Home"
            component={HomeScreen}
            //options={{title: "Mi Perfil"}}
        />
        <Stack.Screen
            name= "Profile"
            component={ProfileScreen}
            //options={{title: "Mi Perfil"}}
        />
        <Stack.Screen
        name= "Setting"
        component={SettingScreen}
        //options={{title: "Mi Perfil"}}
    />
    </Stack.Navigator>
  )
}