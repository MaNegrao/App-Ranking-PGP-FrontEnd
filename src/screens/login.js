import api from '../services/api'
import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image} from 'react-native';
import { withFormik } from 'formik';

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
				<Image source={
				require('../assets/images/icon.png')
				}/>

				<TextInput 
					style = {styles.input}
                    value={this.state.nick}
                    onChangeText={(nick) => this.setState({nick})}
					returnKeyType="next" 
					placeholder='Nickname' 
				/>

				<TextInput 
					style = {styles.input}   
					returnKeyType="go" 
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
					autoCompleteType={'password'}
					placeholder='Senha'             
					secureTextEntry
				/>

				<Button
					onPress={this.loginSubmit}
					title="Login"
				/>

				<Text>Não tem uma conta?</Text>
				
				<Button
					onPress={ () => this.props.navigation.navigate('Register')}
					title="Cadastre-se"
				/>
			</View>
		)
	}
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	},

	input: {
		padding: 20,
		fontSize: 30,
		borderRadius: 0,
		borderWidth: 2,
		borderColor: 'black',
	}
})