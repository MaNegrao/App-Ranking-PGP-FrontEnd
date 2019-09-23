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
						<Text>Não tem uma conta?</Text>
						
						<TouchableOpacity
							onPress={ () => this.props.navigation.navigate('Register')}
							style={styles.button} title = "Cadastrar-se"
						><Text style = {styles.text}>CADASTRAR-SE</Text></TouchableOpacity>
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
		margin:5
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
		marginTop:20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	button:{
		backgroundColor:'black',
		paddingVertical:15,
		margin:20
	},
	text:{
		color: 'white',
		textAlign:'center'
	}
	
})