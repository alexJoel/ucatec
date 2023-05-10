import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default function SimpleSignInScreen(props) {
    const { navigation, route } = props;
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setUserToken } = route.params;
  
    return (
      <View>
        <Text>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button title="Sign Up" onPress={() => setUserToken('token')} />
      </View>
    );
}