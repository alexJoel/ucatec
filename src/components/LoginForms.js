import react from "react"
import {Button, TextInput, View} from "react-native";

export default function LoginForm() {
    return <View>
            <TextInput placeholder="User or mail"/>
            <TextInput placeholder="password"/>
            <Button onPress={()=>console.log('Loginnnn')} title="Login"></Button>
        </View>
}