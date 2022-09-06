import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { data } from '../../data';


const Total = () => {

    const getTotal = () => {
        let total = 0
        for (let days in data) {
            total += data[days]
        }
        return total.toFixed(2)
    }


    return (
        <View style={styles.container}>
            <View style={{ paddingLeft: 45 }}>
                <Text style={{ color: 'rgb(80,80,80)', padding: 2 }}>Total this month</Text>
                <Text style={{ color: '#0e0502', fontWeight: 'bold', fontSize: 25, padding: 2 }}>{`$${getTotal()}`}</Text>
            </View>
            <View style={{ paddingRight: 30, top: 17 }}>
                <Text style={{ color: '#0e0502', fontWeight: 'bold' }}>+2.4%</Text>
                <Text style={{ color: 'rgb(80,80,80' }}>from last month</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Total;
