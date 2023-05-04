import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import BonusScreen from '../screens/BonusScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen';
import HistorialScreen from '../screens/HistorialScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Bonus' component={BonusScreen} options={{
          tabBarLabel: 'Bonus',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bitcoin" color={color} size={size} />
          ),
        }}></Tab.Screen>
        <Tab.Screen name='Configuration' component={ConfigurationScreen} options={{
          tabBarLabel: 'Configuration',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="application-settings" color={color} size={size} />
          ),
        }}></Tab.Screen>
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}></Tab.Screen>
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
          ),
        }}></Tab.Screen>
        <Tab.Screen name='History' component={HistorialScreen} options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  )
}