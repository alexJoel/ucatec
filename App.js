import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as React from 'react';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import SimpleSignInScreen from './src/screens/SimpleSignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const getUserToken = async () => {
        // testing purposes
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        try {
            // custom logic
            await sleep(2000);
            const token = null;
            setUserToken(token);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        getUserToken();
    }, []);

    if (isLoading) {
        // We haven't finished checking for the token yet
        return <SplashScreen />;
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userToken == null ? (
                    // No token found, user isn't signed in
                    <Stack.Screen
                        name="SignIn"
                        component={SimpleSignInScreen}
                        options={{
                            title: 'Sign in',
                        }}
                        initialParams={{ setUserToken }}
                    />
                ) : (
                    // User is signed in
                    <Stack.Screen name="Home" component={HomeScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
