import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7a1010',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFF'
    },
    error: {
        color: 'red',
        marginBottom: 10,
        color: '#FFF'
    },
    formGroup: {
        marginBottom: 10,
        width: '80%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'yellow'
    },
    input: {
        height: 40,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 16,
        color: '#F7C73E'
    },
    button: {
        backgroundColor: '#527A10',
        borderRadius: 5,
        padding: 10,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default function SimpleSignInScreen(props) {
    const { navigation, route } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { setUserToken } = route.params;
    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleSubmit = () => {
        // Validación del formulario
        if (!email.includes('@') || password.length < 6) {
            setErrorMessage('Email o contraseña inválidos');
        } else {
            // Envío del formulario
            console.log('Email:', email);
            console.log('Contraseña:', password);
            setUserToken('Token');
            // ... código para enviar la información del formulario al servidor ...
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={handleEmailChange}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={handlePasswordChange}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    )
}