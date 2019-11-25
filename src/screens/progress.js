import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Progress extends Component {
    exit = async () => {
        this.props.navigation.navigate('Lobby');
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.out}>
                    <TouchableOpacity onPress={this.exit}>
                            <Image source={
                            require('../assets/images/back.png')
                            } style={styles.return}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>Partida em Andamento</Text>
                </View>
                <View>
                    <Image source={
                        require('../assets/splash.png')}
                        style={styles.image}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        paddingTop: 150,
        textAlign: 'center',
    },
    image: {
        alignSelf: 'center',
        paddingTop: 75,
        height: 200,
        width: 200,
    },
    return: {
        height: 40,
        width: 40,
    },
    out: {
        marginTop: 30,
        marginRight: 10,
    },
});