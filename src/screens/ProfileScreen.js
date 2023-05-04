import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ProfileScreen(props) {
    const{navigation} = props;
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
      }
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPress={()=>goToPage("History")} title="Ir a historial" ></Button>
    </View>
  )
}