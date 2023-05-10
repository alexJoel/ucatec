import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();
export default function NavigationStack() {
    return <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Setting" component={SettingsScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
}