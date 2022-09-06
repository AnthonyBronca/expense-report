import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { data } from '../../data';
import { Divider } from 'react-native-elements'
import Total from './Total';



const Chart = () => {

    const date = new Date();
    const day = date.getDay();

    const calendar = {
        0: 'sun',
        1: 'mon',
        2: 'tue',
        3: 'wed',
        4: 'thu',
        5: 'fri',
        6: 'sat'
    }

    const [mon, setMon] = useState(data.mon);
    const [tue, setTue] = useState(data.tue);
    const [wed, setWed] = useState(data.wed);
    const [thu, setThu] = useState(data.thu);
    const [fri, setFri] = useState(data.fri);
    const [sat, setSat] = useState(data.sat);
    const [sun, setSun] = useState(data.sun);
    const [active, setActive] = useState(calendar[day])


    const handleClick = (day) => {
        setActive(day)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.spending}>Spending - Last 7 days</Text>
            </View>
            <View style={styles.graphcontainer}>
                <TouchableOpacity style={styles.dates} onPress={() => handleClick('mon')}>
                    <View>
                        <View style={[styles.bars, { height: mon * 1.5, backgroundColor: active === 'mon' ? '#79BBE0' : '#FF845F' }]} />
                        <Text style={styles.dateText}>mon</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dates} onPress={() => handleClick('tue')}>
                    <View >
                        <View style={[styles.bars, { height: tue * 1.5, backgroundColor: active === 'tue' ? '#79BBE0' : '#FF845F' }]}></View>
                        <Text style={styles.dateText}>tue</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dates} onPress={() => handleClick('wed')}>
                    <View >
                        <View style={[styles.bars, { height: wed * 1.5, backgroundColor: active === 'wed' ? '#79BBE0' : '#FF845F' }]}></View>
                        <Text style={styles.dateText}>wed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dates} onPress={() => handleClick('thu')}>
                    <View >
                        <View style={[styles.bars, { height: thu * 1.5, backgroundColor: active === 'thu' ? '#79BBE0' : '#FF845F' }]}></View>
                        <Text style={[styles.dateText, { paddingLeft: 5 }]}>thu</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dates} onPress={() => handleClick('fri')}>
                    <View>
                        <View style={[styles.bars, { height: fri * 1.5, backgroundColor: active === 'fri' ? '#79BBE0' : '#FF845F' }]}></View>
                        <Text style={[styles.dateText, { paddingLeft: 7 }]}>fri</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dates} onPress={() => handleClick('sat')}>
                    <View>
                        <View style={[styles.bars, { height: sat * 1.5, backgroundColor: active === 'sat' ? '#79BBE0' : '#FF845F' }]}></View>
                        <Text style={styles.dateText}>sat</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dates} onPress={() => handleClick('sun')}>
                    <View>
                        <View style={[styles.bars, { height: sun * 1.5, backgroundColor: active === 'sun' ? '#79BBE0' : '#FF845F' }]}></View>
                        <Text style={styles.dateText}>sun</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ width: '90%', height: 5, paddingLeft: 43 }}>
                <Divider width={0.5} style={{ top: 20 }} />
            </View>
            <View style={{ top: 60 }}>
                <Total />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 7,
        height: 500,
        left: 20,
        top: 10,
    },
    spending: {
        'color': '#0e0502',
        fontSize: 20,
        fontWeight: 'bold',
        left: 25,
        top: 20,
    },
    graphcontainer: {
        flexDirection: 'row',
        paddingTop: 100,
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 40,
    },
    dates: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'center',
    },
    bars: {
        backgroundColor: 'red',
        width: 30,
    },
    dateText: {
        color: 'rgb(80,80,80)',
        paddingLeft: 1
    }
})

export default Chart;
