import React, {Component} from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import Constants from 'expo-constants';
import api from '../services/api';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Ranking extends Component {
  
  state = {
    users: [],
  };
  componentWillMount = async () => {
    await api.get('/ranking').then((response) => {
      this.setState({
        users: response.data
      })
      console.log(this.state.users)
    });
  }



  renderItem = ({item}) => (
  <View style = {styles.lt}>
          <View style = {styles.list}>
              <Image source={
                          require('../assets/images/miniicon.png')
                          } style={styles.icone}/>
              <Text style = {styles.nick}>{item.nick}</Text>
              <Text style = {styles.rk}>  (Ranking: {item.ranking}º)</Text>
              <Text style = {styles.rk}>  (Vitórias: {item.wins})</Text>
              <TouchableOpacity
                          value = {item.nick}
                          onPress={(nick) => this.handleClick(item.nick)}
                          title="Login"
                          style={styles.button}>
                      <Text style = {styles.text}>+</Text>
              </TouchableOpacity>
          </View>
   </View>
)
  render (){
    return(
      <SafeAreaView style={styles.container} >
        <View>
          <Text style={{fontSize: 40,
textAlign:'center',
fontWeight:'bold',
padding:20
}}>RANKING</Text>
          <ScrollView>
          <FlatList
                        data={this.state.users}
                        keyExtractor={item => item.ranking}
                        renderItem={this.renderItem}
                        />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  button:{
    backgroundColor:'black',
    alignSelf: 'flex-end',
    padding:4,
    borderRadius:5
},
seatImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
},
bar:{
    backgroundColor: 'black',
    width:500,
    height: 30,
},
lt:{
    overflow:'hidden'
},
text:{
fontSize: 40,
color: 'white',
textAlign:'center'
},
icone:{
    alignSelf: 'center'
},
lt:{
    justifyContent:'center'

},
rk: {
    color: 'black',
textAlign:'left',
fontSize: 15
},
nick: {
    color: 'black',
fontWeight:'bold',
textAlign:'left',
fontSize: 20
},
list: {
  justifyContent:'space-around',
    overflow:'hidden',
    flexDirection: 'row',
    alignItems: 'center',
width:wp('100%'),
height:60,
borderRadius: 0,
borderWidth: 2,
borderColor: 'black',

},
input: {
    fontSize:20,
    marginTop:1,
    marginBottom:5,
width:350,
height:40,
padding: 5,
borderRadius: 0,
borderBottomWidth: 2,
borderColor: 'black',
},
});