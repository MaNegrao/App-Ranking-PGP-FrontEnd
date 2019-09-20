import React, {Component} from 'react';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator (
  {
    Login: {
      screen : LoginScreen
    },

    Register: {
      screen: RegisterScreen
    }
  },

  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer (AppNavigator);

export default class App extends Component{
  render(){
    return (
      <AppContainer/>
    )
  }
}