import React, {Component} from 'react';
import api from '../services/api'
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import ImagePicker from "../components/imagePicker";


export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            nick: '',
            email: '',
            // checkEmail: '',
            password: '',
            // checkPassword: '',
            pic: '',
            wins: 0,
        }
    }

    validateEmail = (email, checkEmail) => {
        const regex = /^[a-z._-]+@[a-z.-]+\.[a-z]{2,4}$/;

        if (email == "" || checkEmail == "" || checkEmail != email){
            return false
        } else {
            return regex.test(email)
        }
    }

    registerSubmit = () => {
        const response = api.post('/players', this.state)
        const resposta = api.get('/players')
        console.log(response)
    }

    render () {
        return(
            <View>
                <Text style={styles.text}>Bem Vindo, Registre-se</Text>
                
                <Image source={
                require('../assets/images/icon.png')
                }/>
                
                <TextInput
                    style = {styles.input} 
                    placeholder={'Nome'}
                    value={this.state.name}
                    onChangeText={(name) => this.setState({name})}
                    autoCompleteType={'name'}
                />
        
                <TextInput
                    style = {styles.input} 
                    placeholder={'Nickname'}
                    value={this.state.nick}
                    onChangeText={(nick) => this.setState({nick})}
                />
        
                <TextInput
                    style = {styles.input} 
                    placeholder={'E-mail'}
					value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                    autoCompleteType={'email'}
                    keyboardType={'email-address'}
                />
        
                {/* <TextInput
                    style = {styles.input} 
                    placeholder={'Confirme o E-mail'}
                    value={this.state.checkEmail}
                    onChangeText={(checkEmail) => this.setState({checkEmail})}
                    autoCompleteType={'email'}
                    keyboardType={'email-address'}
                /> */}
        
                <TextInput
                    style = {styles.input} 
                    placeholder={'Senha'}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    autoCompleteType={'password'}
					secureTextEntry
                    />
        
                {/* <TextInput
                    style = {styles.input} 
                    placeholder={'Confirme a Senha'}
                    value={this.state.checkPassword}
                    onChangeText={(checkPassword) => this.setState({checkPassword})}
                    autoCompleteType={'password'}
                /> */}
        
                <ImagePicker style = {styles.input}/>
        
                <Button
                    onPress={this.registerSubmit.bind(this)}
                    title="Register"
                />
        
                <Text>Já tenho uma conta:</Text>
        
                <Button
                    onPress={ () => this.props.navigation.navigate('Login')}
                    title="Login"
                />
            </View>
        )

    }

}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        padding: 10
    },

    input: {
		padding: 10,
		fontSize: 10,
		borderRadius: 0,
		borderBottomWidth: 2,
		borderColor: 'black',
    }
})