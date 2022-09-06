import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
};


const Balance = () => {
    return (
        <View style={styles.container2}>
            <View style={styles.container}>
                <View style={styles.inner}>
                    <View style={styles.balance}>
                        <Text style={styles.text}>My Balance</Text>
                        <Text style={[styles.text, styles.balanceText]}>$921.48</Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../icons/Discover-logo.png')} />
                    </View>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF845F',
        height: 80,
        width: '90%',
        borderRadius: 7
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    balance: {
        flexDirection: 'column',
        alignContent: 'center',
        top: 18,
        left: 15,
    },
    logoContainer: {
        height: 100,
        width: 100,
        right: 4,
        top: 30
    },
    logo: {
        height: '15%',
        width: '80%',
    },
    text: {
        color: 'white',
        fontSize: 12,
        padding: 2
    },
    balanceText: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Balance;
