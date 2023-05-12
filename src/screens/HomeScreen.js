import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const menuItems = [
    {
        id: 1,
        title: 'Hamburguesa',
        description: 'Deliciosa hamburguesa con queso, tocino y papas fritas',
        price: 'Bs. 9.99',
        image: require('../assets/descarga.jpeg'),
    },
    {
        id: 2,
        title: 'Ensalada César',
        description: 'Crujiente lechuga, pollo a la parrilla, queso parmesano y aderezo César',
        price: 'Bs. 7.99',
        image: require('../assets/2.jpeg'),
    },
    {
        id: 3,
        title: 'Pizza Margherita',
        description: 'Pizza clásica con tomate, mozzarella fresca y albahaca',
        price: 'Bs. 12.99',
        image: require('../assets/3.jpeg'),
    },
];

export default function HomeScreen(props) {
    const { navigation } = props;
    console.log(props);

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Bienvenido a nuestro restaurante</Text>
            </View>
            <View style={styles.menu}>
                {menuItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.menuItem}
                        onPress={() => handleMenuItemPress(item.id)}
                    >
                        <Image style={styles.menuItemImage} source={item.image} />
                        <View style={styles.menuItemInfo}>
                            <Text style={styles.menuItemTitle}>{item.title}</Text>
                            <Text style={styles.menuItemDescription}>{item.description}</Text>
                            <Text style={styles.menuItemPrice}>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            {/*<Button onPress={() => goToPage("Profile")} title="Go to Profile" ></Button>*/}
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        backgroundColor: '#0077cc',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 24,
        color: '#fff',
    },
    menu: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    menuItem: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
    },
    menuItemImage: {
        height: 120,
        borderRadius: 5,
        marginBottom: 10,
    },
    menuItemInfo: {
        alignItems: 'center',
    },
    menuItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    menuItemDescription: {
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'center',
    },
    menuItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0077cc',
    },
});