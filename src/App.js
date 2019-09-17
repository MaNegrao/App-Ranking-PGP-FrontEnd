import React, {Component} from 'react';
import LoginScreen from './screens/login';
import RegisterScreen from '.screens/login';
import {createStackNavigator, createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator (
  {
    Login: {
      screen : Login
    }


  }
);




export default function App() {
  return (
    <Login/>
  );
}