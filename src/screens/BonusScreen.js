import { View, Text, Button } from 'react-native'
import React from 'react'

export default function BonusScreen(props) {
    const{navigation} = props;
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
      }
  return (
    <View>
      <Text>BonusScreen</Text>
      <Button onPress={()=>goToPage("Home")} title="Ir a Home" ></Button>
    </View>
  )
}