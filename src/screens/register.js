import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { withFormik } from 'formik';

const Form = (props) => (
    <View>

        <Text style={styles.text}>Bem Vindo, Registre-se</Text>
        <Image source={
          require('../assets/images/icon.png')
        }/>
        
        <TextInput
            value={props.values.email}
            onChangeText={text => props.setFieldValue('email', text)}
        />

        <TextInput
            value={props.values.checkEmail}
            onChangeText={text => props.setFieldValue('checkEmail', text)}
        />

        <TextInput
            value={props.values.name}
            onChangeText={text => props.setFieldValue('name', text)}
        />

        <TextInput
            value={props.values.nickname}
            onChangeText={text => props.setFieldValue('nickname', text)}
            autoCompleteType={'password'}
        />

        <TextInput
            value={props.values.password}
            onChangeText={text => props.setFieldValue('password', text)}
            autoCompleteType={'password'}
        />

        <TextInput
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
        
            title="Login"
        />
    </View>
)

export default withFormik({
    mapPropsToValues: () => ({ email: '', checkEmail: '', name: '', nickname: '', password: '' , checkPassword: ''}),
  
    handleSubmit: (values) => {
      console.log(values);
    }
  })(Form);