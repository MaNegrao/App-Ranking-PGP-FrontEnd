import React, {Component} from 'react';
import api from '../services/api';
import { Icon } from 'react-native-elements';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import ImagePicker from "../components/imagePicker";
import SafeAreaView from 'react-native-safe-area-view';
import { TouchableOpacity } from 'react-native-gesture-handler';    

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
			<SafeAreaView  style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Bem Vindo, Registre-se</Text>
                    <Image source={require('../assets/images/icon.png')}/>
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

                    {/* <TextInput
                        style = {styles.input} 
                        placeholder={'Confirme o E-mail'}
                        value={this.state.checkEmail}
                        onChangeText={(checkEmail) => this.setState({checkEmail})}
                        autoCompleteType={'email'}
                        keyboardType={'email-address'}
                    /> */}
            
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
            
                    {/* <TextInput
                        style = {styles.input} 
                        placeholder={'Confirme a Senha'}
                        value={this.state.checkPassword}
                        onChangeText={(checkPassword) => this.setState({checkPassword})}
                        autoCompleteType={'password'}
                    /> */}
            
                    <ImagePicker style = {styles.button}/>
                   
                    <View>
                        <TouchableOpacity
                                title="Register"
                                style={styles.button}
                                onPress={this.registerSubmit.bind(this)}>
                                <Text style={styles.buttonText} >Resgister</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.buttonText}>Já tenho uma conta:</Text>
            
                    <Button
                        onPress={ () => this.props.navigation.navigate('Login')}
                        title="Login"
                    />
                </View>
            </SafeAreaView>
        )

    }

}

const styles = StyleSheet.create({

    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: { 
        width:200,
		height:80,
        fontSize: 30,
    },

    button:{
		backgroundColor:'black',
		paddingVertical:15,
		margin:10
	},

    input: {
		fontSize:20,
		marginTop:10,
		width:300,
		height:80,
		padding: 10,
		borderRadius: 0,
		borderBottomWidth: 2,
		borderColor: 'black',
    },

    buttonText:{
        fontSize:20,
		color: 'white',
		textAlign:'center'
	}
})