import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as React from 'react';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer></NavigationDrawer>
    </NavigationContainer>
  );
}
