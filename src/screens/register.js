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
            password: '',
            checkPassword: '',
            pic: '',
            wins: 0,
        }
    }

    validate = (name, nick, email, password, checkPassword) => {
        const regex = /^[a-zA-Z0-9._-]+@([a-z0-9]+)(\.[a-z]{2,3})+$/;

        if (name == ""){
            alert("Por favor, insira seu nome")
            return false
        } else if (nick == ""){
            alert("Por favor, insira seu nickname")
            return false
        } else if (email == ""){
            alert("Por favor, insira seu email")
            return false
        } else if (regex.test(email) == false){
            alert("Por favor, insira um email válido")
            return false
        } else if (password == ""){
            alert("Por favor, insira uma senha")
            return false
        } else if (password != checkPassword){
            alert("As senhas devem ser iguais")
            return false
        } else if (password.length < 8){
            alert("A senha deve ter no mínimo 8 digitos")
            return false
        } else 
            return true
    }

    registerSubmit = () => {
        const ts = this.state
        if (this.validate(ts.name, ts.nick, ts.email, ts.password, ts.checkPassword) == false)
            console.log("Erro")
        else{
            const response = api.post('/players', this.state)
            const resposta = api.get('/players')
            console.log(response)
        }
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

                    <View>
                        <TextInput
                            style = {styles.input} 
                            placeholder={'Confirme a Senha'}
                            value={this.state.checkPassword}
                            onChangeText={(checkPassword) => this.setState({checkPassword})}
                            autoCompleteType={'password'}
                            secureTextEntry
                        />
                    </View>
            
                    <ImagePicker style = {styles.button}/>
                   
                    <View>
                        <TouchableOpacity
                                title="Register"
                                style={styles.button}
                                onPress={this.registerSubmit.bind(this)}>
                                <Text style={styles.buttonText} >Resgister</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={ () => this.props.navigation.navigate('Login')}
                            style={styles.button2} title = "Entrar"
                        >
                        <Text style = {styles.text2}>Entrar</Text></TouchableOpacity>
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