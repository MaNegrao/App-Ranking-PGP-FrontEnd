import React, {Component} from 'react';
import api from '../services/api';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, TextInput, Button, Text, StyleSheet, Image, AsyncStorage } from 'react-native';
import ImagePicker from "../components/imagePicker";
import SafeAreaView from 'react-native-safe-area-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {KeyboardAvoidingView} from 'react-native';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            nick: '',
            email: '',
            password: '',
            checkPassword: '',
            pic: '',
            wins: 0,
        }
    }

    validate = (name, nick, email, password, checkPassword) => {
        const regex = /^[a-zA-Z0-9._-]+@([a-z0-9]+)(\.[a-z]{2,3})+$/;

        if (name == ""){
            alert("Por favor, insira seu nome")
            return false
        } else if (nick == ""){
            alert("Por favor, insira seu nickname")
            return false
        } else if (email == ""){
            alert("Por favor, insira seu email")
            return false
        } else if (regex.test(email) == false){
            alert("Por favor, insira um email válido")
            return false
        } else if (password == ""){
            alert("Por favor, insira uma senha")
            return false
        } else if (password != checkPassword){
            alert("As senhas devem ser iguais")
            return false
        } else if (password.length < 8){
            alert("A senha deve ter no mínimo 8 digitos")
            return false
        } else
            return true
    }

    registerSubmit = async () => {
        const ts = this.state
        if (this.validate(ts.name, ts.nick, ts.email, ts.password, ts.checkPassword) == false)
            console.log("Erro")
        else{
            const response = await api.post('/players', this.state);
            AsyncStorage.setItem('userToken', response.data.token);
    		this.props.navigation.navigate('App');
        }
    }

    render () {
        return(
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <View style={styles.header}>
                        <Image source={require('../assets/images/icon.png')}/>
                        <Text style={styles.title}>Bem Vindo, Registre-se</Text>
                    </View>
                    <View>
                        <View>
                            <TextInput
                                style = {styles.input}
                                placeholder={'Nome'}
                                value={this.state.name}
                                onChangeText={(name) => this.setState({name})}
                                autoCompleteType={'name'}
                            />
                        </View>

                        <View>
                            <TextInput
                                style = {styles.input}
                                placeholder={'Nickname'}
                                value={this.state.nick}
                                onChangeText={(nick) => this.setState({nick})}
                            />
                        </View>

                        <View>
                            <TextInput
                                style = {styles.input}
                                placeholder={'E-mail'}
                                value={this.state.email}
                                onChangeText={(email) => this.setState({email})}
                                autoCompleteType={'email'}
                                keyboardType={'email-address'}
                            />
                        </View>

                        <View>
                            <TextInput
                                style = {styles.input}
                                placeholder={'Senha'}
                                value={this.state.password}
                                onChangeText={(password) => this.setState({password})}
                                autoCompleteType={'password'}
                                secureTextEntry
                            />
                        </View>

                        <View>
                            <TextInput
                                style = {styles.input}
                                placeholder={'Confirme a Senha'}
                                value={this.state.checkPassword}
                                onChangeText={(checkPassword) => this.setState({checkPassword})}
                                autoCompleteType={'password'}
                                secureTextEntry
                            />
                        </View>

                        {/* <ImagePicker style = {styles.button}/> */}

                        <View>
                            <TouchableOpacity
                                    title="Register"
                                    style={styles.button}
                                    onPress={this.registerSubmit.bind(this)}>
                                    <Text style={styles.buttonText} >CADASTRAR</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.textLogin}>Já tenho uma conta:</Text>

                            <TouchableOpacity
                                onPress={ () => this.props.navigation.navigate('Login')}
                                style={styles.loginButton} title = "Entrar"
                            >
                            <Text style = {styles.textButtonLogin}>ENTRAR</Text></TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        margin: 20,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: hp('80%'),
        width: wp('90%')
    },

    header: {
        marginTop: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    footer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    title: {
        fontSize:hp('3%'),
    },

    button:{
		backgroundColor:'black',
        marginTop: hp('3%'),
        padding: hp('2%')
	},

    input: {
		fontSize:hp('2.5%'),
		width: wp('90%'),
		height: hp('10%'),
		borderRadius: 0,
		borderBottomWidth: 2,
		borderColor: 'black',
    },

    buttonText:{
        fontSize:hp('2.5%'),
		color: 'white',
        textAlign:'center',
        fontWeight:'bold',
    },

    textButtonLogin:{
		color: 'black',
		fontWeight:'bold',
		textAlign:'center',
		fontSize:hp('2.5%')
    },

    loginButton:{
		backgroundColor:'transparent',
		alignSelf:'flex-end'
	},

	textLogin:{
		color: 'black',
		fontSize: 16
	}
})
