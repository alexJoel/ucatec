import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}