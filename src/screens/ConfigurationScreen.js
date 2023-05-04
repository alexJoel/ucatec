import { View, Text,Button } from 'react-native'
import React from 'react'

export default function ConfigurationScreen(props) {
    const{navigation} = props;
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
      }
  return (
    <View>
      <Text>ConfigurationScreen</Text>
      <Button onPress={()=>goToPage("Bonus")} title="Ir a Bonus" ></Button>
    </View>
  )
}