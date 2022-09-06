import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Balance from '../components/home/Balance';
import Chart from '../components/home/Chart';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ top: 40 }}>
                <Balance />
                <Chart />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFDABB',
        flex: 1,
    }
})

export default HomeScreen;
