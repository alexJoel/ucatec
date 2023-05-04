import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ConfigurationScreen from "../screens/ConfigurationScreen";
import BonusScreen from "../screens/BonusScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HistorialScreen from "../screens/HistorialScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
    return <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Configuration" component={ConfigurationScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Bonus" component={BonusScreen}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="History" component={HistorialScreen}></Stack.Screen>
    </Stack.Navigator>
}