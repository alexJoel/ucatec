import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HistorialScreen(props) {
    const{navigation} = props;
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
      }
  return (
    <View>
      <Text>HistorialScreen</Text>
      <Button onPress={()=>goToPage("Configuration")} title="Ir a Configuration" ></Button>
    </View>
  )
}