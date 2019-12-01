import api from '../services/api'
import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, StatusBar, AsyncStorage} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withFormik } from 'formik';
import SafeAreaView from 'react-native-safe-area-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {KeyboardAvoidingView} from 'react-native';

export default class Login extends Component {
	constructor() {
        super();
        this.state = {
            email: '',
            password: '',
						error: false
        }
	}

	loginSubmit = async () => {
			this.state.error = false;
			this.forceUpdate()
      await api.post('/authenticate', this.state
			).then((response) => {
					AsyncStorage.setItem('userToken', response.data.token);
					AsyncStorage.setItem('email', response.data.player.email);
					AsyncStorage.setItem('id', response.data.player.id);
					AsyncStorage.setItem('name', response.data.player.name);
					AsyncStorage.setItem('nick', response.data.player.nick);
					this.props.navigation.navigate('App');
			}).catch((error) => {
					this.state.error = true;
					this.forceUpdate();
			});
	}

	render () {
		const errorMessage = <Text style= {styles.errorMessage} >Usuário e/ou senha incorretos!</Text>;
		const nothing = <Text></Text>
		return(
            <SafeAreaView style={styles.container}>
				<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
					<StatusBar backgroundColor="#000000" hidden={false} translucent={false} currentHeight={20}/>
					<Image source={require('../assets/images/icon.png')} style={styles.logo}/>
					<View>
						<View>
							<TextInput
								style = {styles.input}
								value={this.state.email}
								onChangeText={(email) => this.setState({email})}
								returnsKeyType="next"
								placeholder='E-mail'
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
							{this.state.error? errorMessage : nothing}
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
				</KeyboardAvoidingView>
			</SafeAreaView>
		)
	}

}

const styles = StyleSheet.create({
	logo:{
		margin:5
	},
	input: {
		marginTop: 10,
		fontSize:hp('2.5%'),
		width: wp('90%'),
		height: hp('10%'),
		borderRadius: 0,
		borderBottomWidth: 2,
		borderColor: 'black',
	},
	errorMessage:{
		alignSelf: 'center',
		color : 'red'
	},
	container: {
		margin: 20,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: hp('80%'),
        width: wp('90%')
	},
	button:{
		backgroundColor:'black',
        marginTop: hp('3%'),
        fontWeight:'bold',
        padding: hp('2%'),
	},
	text:{
		fontSize:hp('2.5%'),
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
