import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image} from 'react-native';
import { withFormik } from 'formik';

const loginForm = (props) => (
  <View style={styles.container}>

    <Image source={
      require('../assets/images/icon.png')
    }/>

	<TextInput 
		style = {styles.input}
		value={props.values.nickname}
		onChangeText={text => props.setFieldValue('nickname', text)} 
		returnKeyType="next" 
		placeholder='Nickname' 
    />

    <TextInput 
		style = {styles.input}   
		returnKeyType="go" 
		value={props.values.password}
		onChangeText={text => props.setFieldValue('password', text)}
		autoCompleteType={'password'}
		placeholder='Senha'             
		secureTextEntry
    />

    <Button
		onPress={props.handleSubmit}
		title="Login"
    />

    <Text>Não tem uma conta?</Text>
    
    <Button
		onPress={ () => props.navigation.navigate('Register')}
		title="Cadastre-se"
    />
  </View>
);

export default withFormik({
	mapPropsToValues: () => ({ nickname: '', password: '' }),

	handleSubmit: (values) => {
		console.log(values);
	}

})(loginForm);

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