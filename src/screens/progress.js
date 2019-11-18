import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Progress extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text>Partida em Andamento</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'space-around',
        backgroundColor: 'black',
    },
    text: {
        fontSize:hp('10%'),
        color: 'white',
        textAlign: 'center',
    }
});