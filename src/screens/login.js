import api from '../services/api'
import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image} from 'react-native';
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
					
					<View>

						
						
						<Text style={styles.text3}>Não tem uma conta?</Text>
						<TouchableOpacity
							onPress={ () => this.props.navigation.navigate('Register')}
							style={styles.button2} title = "Cadastrar-se"
						><Text style = {styles.text2}>CADASTRAR-SE</Text></TouchableOpacity>

					</View>
				</View>
			</View>
		)
	}
	
}

const styles = StyleSheet.create({
	logo:{
		width:250,
		height:250,
		marginBottom:10
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
	container: {
		marginTop:10,
		marginVertical:5,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5
	},
	button:{
		backgroundColor:'black',
		paddingVertical:20,
		paddingHorizontal:10,
		marginTop:60,
		marginBottom:20
	},
	button2:{
		backgroundColor:'white',
	},
	bot:{
		flexDirection: 'row',
		marginTop:20
	},
	text:{
		color: 'white',
		textAlign:'center',
		fontSize: 20
	},
	text2:{
		color: 'black',
		fontWeight:'bold',
		textAlign:'center',
		fontSize: 20
	},
	text3:{
		color: 'black',
		fontSize: 20,
		textAlign:'center'
	}

	
})