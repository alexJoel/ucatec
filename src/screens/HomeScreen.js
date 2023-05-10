import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(props) {
    const { navigation } = props;
    console.log(navigation);
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }
    return <SafeAreaView>
        <Text>Estamos en el HomeScreen</Text>
        <Text>Estamos en el HomeScreen</Text>
        <Text>Estamos en el HomeScreen</Text>
        <Text>Estamos en el HomeScreen</Text>
        <Text>Estamos en el HomeScreen</Text>
        <Button onPress={()=>goToPage('Setting')} title="Go to Setting"></Button>
    </SafeAreaView>
}