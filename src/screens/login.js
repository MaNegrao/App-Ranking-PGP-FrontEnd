import api from '../services/api'
import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, StatusBar} from 'react-native';
import { withFormik } from 'formik';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends Component {
	constructor() {
        super();
        this.state = {
            nick: '',
            password: '',
        }
	}
	
	loginSubmit = () => {
        const response = api.get('/players/:nickname', this.state.nick)
    	console.log(response)
	}

	render () {
		return(
			<View style={styles.container}>
				<StatusBar backgroundColor="#000000" hidden={false} translucent={false} currentHeight={20}/>	
				<Image source={require('../assets/images/icon.png')} style={styles.logo}/>
				<View>
					<View>
						<TextInput 
							style = {styles.input}
							value={this.state.nick}
							onChangeText={(nick) => this.setState({nick})}
							returnsKeyType="next" 
							placeholder='Nickname' 
						/>
					</View>
					<View>
						<TextInput 
							style = {styles.input}   
							returnKeyType="go" 
							value={this.state.password}
							onChangeText={(password) => this.setState({password})}
							autoCompleteType={'password'}
							placeholder='Senha'             
							secureTextEntry
						/>
					</View>
					<View>
						<TouchableOpacity
							onPress={this.loginSubmit}
							title="Login"
							style={styles.button}>
						<Text style = {styles.text}>LOGIN</Text>
						</TouchableOpacity>
					</View>
					
					<View style={styles.footer}> 
						<Text style={styles.textRegister}>Não tem uma conta? </Text>
						
						<TouchableOpacity
							onPress={ () => this.props.navigation.navigate('Register')}
							style={styles.registerButton} title = "Cadastrar-se"
						><Text style = {styles.textButtonRegister}>CADASTRAR-SE</Text></TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
	
}

const styles = StyleSheet.create({
	logo:{
		margin:5
	},
	input: {
		fontSize:20,
		marginTop:10,
		width:350,
		height:80,
		padding: 10,
		borderRadius: 0,
		borderBottomWidth: 2,
		borderColor: 'black',
	},
	container: {
		margin:30,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button:{
		backgroundColor:'black',
		paddingVertical:12,
		marginTop:20
	},
	text:{
		fontSize: 20,
		color: 'white',
		textAlign:'center'
	},

	footer: {
		marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
	
	textButtonRegister:{
		color: 'black',
		fontWeight:'bold',
		textAlign:'center',
		fontSize: 20
    },

    registerButton:{
		backgroundColor:'transparent',
		alignSelf:'flex-end'
	},
    
	textRegister:{
		color: 'black',
		fontSize: 16
	}

})