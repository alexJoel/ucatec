import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTabs from './src/navigation/NavigationTabs';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
        {/* <NavigationStack></NavigationStack> */}
        {/* <NavigationTabs></NavigationTabs> */}
        <NavigationDrawer></NavigationDrawer>
    {/* <View style={styles.container}>
      <Saludo name="Alex" lastName="Sajama"></Saludo>
      <Saludo></Saludo>
      <StatusBar style="auto" />
      <LoginForm></LoginForm>
    </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
