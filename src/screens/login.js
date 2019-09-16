import React from 'react';
import { View, TextInput, Button , StyleSheet,Text,Image} from 'react-native';
import { withFormik } from 'formik';

const Form = (props) => (
  <View style={styles.container}>
    <Image source={
          require('../assets/images/icon.png')
        }
        style={styles.welcomeImage
        }/>
    <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Nickname' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>


    <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Senha' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/>

    

    <Button
      onPress={props.handleSubmit}
      title="Login"
    />
    <Text>Não tem uma conta?</Text>
    <Button
      onPress={props.handleSubmit}
      title="Cadastre-se"
    />
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ nick: '', password: '' }),

  handleSubmit: (values) => {
    console.log(values);
  }
})(Form);



// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',