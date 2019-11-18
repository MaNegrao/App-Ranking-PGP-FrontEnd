import React, {Component} from 'react';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import LobbyScreen from './screens/lobby';
import AuthLoadingScreen from './screens/auth';
import GameScreen from './screens/game';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppStack = createStackNavigator({Lobby: LobbyScreen, Game: GameScreen}, { headerMode: 'none'});
const AuthStack = createStackNavigator({Login: LoginScreen, Register: RegisterScreen}, { headerMode: 'none'});
const AppNavigator = createSwitchNavigator (
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },

  {
    initialRouteName: 'AuthLoading',
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
