import { View, Text,Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }
    return (
        <View>
            <Text>homeScreen</Text>
            <Button onPress={() => goToPage("Profile")} title="Go to Profile" ></Button>
        </View>
    )
}