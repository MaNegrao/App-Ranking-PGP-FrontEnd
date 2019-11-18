import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Progress extends Component {
    render(){
        return(
            <View>        
                <View>
                    <Text>Partida em Andamento</Text>
                </View>
                <View>
                    <Search>
                        <Image source={
                            require('../assets/SplashScreen.png')}/>
                    </Search>
                </View>
                <View>
                    <Text>Aguarde o final da partida</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    
});