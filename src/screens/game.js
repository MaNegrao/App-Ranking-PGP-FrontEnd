import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Counter from '../components/Counter';

export default class LinksScreen extends Component {

  state = {
      t1: {
        players: [],
      },
      t2: {
        players: [],
      },
  };
  componentWillMount(){
    const { navigation } = this.props;
    this.state.t1.players = navigation.getParam('t1');
    this.state.t2.players = navigation.getParam('t2');
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
          <Counter />
          <Counter />
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
