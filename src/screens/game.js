import React, { Component }  from 'react';
import { StyleSheet, View, Image, Text, Alert, AsyncStorage } from 'react-native';
import Counter from '../components/Counter';
import api from '../services/api';

export default class Game extends Component {

  state = {    
    t1: {
      score: 0,
      players: [],
      win: 0,
    },
    t2: {
      score: 0,      
      players: [],
      win: 0,
    },
  }

  componentWillMount(){
    const { navigation } = this.props;
    this.state.t1.players = navigation.getParam('t1');
    this.state.t2.players = navigation.getParam('t2');
  }

  setScore = async (team, score, win) => {
    if(team == 't1'){
      await this.setState({
        t1: {score, players: this.state.t1.players, win}
      });
    } else {
      await this.setState({
        t2: {score, players: this.state.t2.players, win}
      });
    }
    console.log(this.state);
  }

  endGame = () => {
    Alert.alert(
      'Fim de jogo',
      'Deseja encerrar a partida',
      [
        {
          text: 'Sim', 
          onPress: () => this.saveResults()
        },
        {
          text: 'Isto foi um engano',
          onPress: () => console.log('any'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  saveResults = async () => {
    let token;

    try {
      token = await AsyncStorage.getItem('userToken');
    } catch (error) {
      alert('Ocorreu um erro com seu login');
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
      
    }    

    const headers = {
      'Authorization': `Bearer ${token}`
    }
    
    api.post('/endgame', this.state, { headers })
      .then(response => {
        this.props.navigation.navigate('Lobby');
      })
      .catch(error => {
        alert('Ocorreu um erro e não foi possível confirmar o andamento da partida!')
      });
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Image source={require('../assets/images/miniicon.png')} style={styles.profileImage}/>
            <Text>{this.state.t1.players[0]}</Text>
          </View>
          <View>
            <Image source={require('../assets/images/miniicon.png')} style={styles.profileImage}/>
            <Text>{this.state.t1.players[1]}</Text>
          </View>
          <Image source={require('../assets/images/miniicon.png')} style={styles.headerImage}/>
          <View>
            <Image source={require('../assets/images/miniicon.png')} style={styles.profileImage}/>
            <Text>{this.state.t2.players[0]}</Text>
          </View>
          <View>
            <Image source={require('../assets/images/miniicon.png')} style={styles.profileImage}/>
            <Text>{this.state.t2.players[1]}</Text>
          </View>
        </View>
        <View style={styles.counterContainer}>
          <Counter functionEndGame={this.endGame} functionSetScore={this.setScore} team='t1'/>
          <Counter functionEndGame={this.endGame} functionSetScore={this.setScore} team='t2'/>
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerIcon: {

  },
  headerImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  profileImage: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 200 / 2,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#b5f7e8',
  },
  counterContainer: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#b5f7e8',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

});
