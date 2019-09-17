import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';

import { withFormik } from 'formik';

const registerForm = (props) => (
    <View>
        <Text style={styles.text}>Bem Vindo, Registre-se</Text>
        
		<Image source={
          require('../assets/images/icon.png')
        }/>
        
        <TextInput
            style = {styles.input} 
            value={props.values.email}
            onChangeText={text => props.setFieldValue('email', text)}
        />

        <TextInput
            style = {styles.input} 
            value={props.values.checkEmail}
            onChangeText={text => props.setFieldValue('checkEmail', text)}
        />

        <TextInput
            style = {styles.input} 
            value={props.values.name}
            onChangeText={text => props.setFieldValue('name', text)}
        />

        <TextInput
            style = {styles.input} 
            value={props.values.nickname}
            onChangeText={text => props.setFieldValue('nickname', text)}
            autoCompleteType={'password'}
        />

        <TextInput
            style = {styles.input} 
            value={props.values.password}
            onChangeText={text => props.setFieldValue('password', text)}
            autoCompleteType={'password'}
        />

        <TextInput
            style = {styles.input} 
            value={props.values.checkPassword}
            onChangeText={text => props.setFieldValue('checkPassword', text)}
            autoCompleteType={'password'}
        />

        <Button
            onPress={props.handleSubmit}
            title="Register"
        />

        <Text>Já tenho uma conta:</Text>

        <Button
            onPress={ () => props.navigation.navigate('Login')}
            title="Login"
        />
    </View>
)

export default withFormik({
    
    mapPropsToValues: () => ({ email: '', checkEmail: '', name: '', nickname: '', password: '' , checkPassword: ''}),
  
    handleSubmit: (values) => {
      console.log(values);
    }
  })(registerForm );


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
		borderWidth: 2,
		borderColor: 'black',
    }
})