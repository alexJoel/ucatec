import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
const Tab = createBottomTabNavigator();
export default function NavigationTabs() {
    return <Tab.Navigator>
        <Tab.Screen name="Setting" component={SettingsScreen}></Tab.Screen>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
    </Tab.Navigator>
}