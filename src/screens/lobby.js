import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import { AuthSession } from 'expo';
import { ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Search from '../components/searchPlayers'

export default class Lobby extends Component {
  constructor() {
        super();
        this.state = {
            self_nick: '',
            partner_nick: '',
            left_adversary_nick: '',
            right_adversary_nick: '',
            count: 0
        }
  }
    handledisableenable()
        {
           if(1)
            {
                this.setState({ Isbuttonenable : true });
            }
          else
          {
            this.setState({ Isbuttonenable : false });
          }
        }
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };

    componentWillMount(){
      AsyncStorage.getItem("nick").then((value) => {
          this.setState({"self_nick": value});
      });
    }
    render(){
            return(
              <View style={styles.container}>
                  <View style={styles.leftTop}>
                      <View  style={styles.out}>
                      <TouchableOpacity
                              onPress={this._signOutAsync}
                          >
                              <Image source={
                              require('../assets/images/back.png')
                              } style={styles.signout}/>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.out1}>
                          <Image source={
                                  require('../assets/images/miniicon.png')
                                  } style={styles.icone}/>
                      </View>
                  </View>
                  <View style={styles.gameTable}>
                      <View style={styles.centerRowTop}>
                          <Search/>
                      </View>
                      <View style={styles.centerRow}>
                          <Search/>
                          <Image source={
                              require('../assets/images/table.png')
                          } style={styles.table}/>
                          <Search/>
                      </View>
                      <View style={styles.centerRowBot}>
                          <TouchableOpacity>
                              <Image source={
                                  require('../assets/images/seat_bot.png')
                                  } style={styles.seatImg}/>
                                  <View style={{position: 'absolute',  top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                      <Text>{this.state.self_nick}</Text>
                                  </View>
                          </TouchableOpacity>
                      </View>

                  </View>
                  <View>
                      {/* disabled={this.state.Isbuttonenable ? false : true} style={this.state.Isbuttonenable ?
                                      styles.buttonstart :
                                      {opacity: 0.1}} */}
                  <TouchableOpacity
  								style={
                                      styles.buttonstart
                                      } title = "INICIAR PARTIDA"
  							><Text style = {styles.textstart}>INICIAR PARTIDA</Text></TouchableOpacity>
                  </View>
              </View>
          )
    }
}
const styles = StyleSheet.create({
    textstart:{
		fontSize:hp('4%'),
		color: 'white',
		textAlign:'center'
	},
    container: {
        flex:1
    },
    seatImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    buttonstart:{
        backgroundColor:'black',
        marginTop: hp('3%'),
        fontWeight:'bold',
        padding: hp('2%'),
    },
    button:{
        backgroundColor:'black',
        alignSelf: 'center',
        padding:5
	},
	text:{
		fontSize: 20,
		color: 'white',
		textAlign:'center'
    },
    out:{
        alignSelf: 'flex-start',
    },
    out1:{
        alignSelf:'center',
        paddingLeft: 105,
    },
    icone:{
        width: 100,
        height: 100,
    },
    signout:{
        width: 40,
        height: 40,
    },
    lt:{
        overflow:'hidden'

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
        overflow:'hidden',
        flexDirection: 'row',
        alignItems: 'center',
		width:380,
		height:60,
		borderRadius: 0,
		borderWidth: 2,
		borderColor: 'black',

    },
    table: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    img: {
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    img2: {
        width: 100,
        height: 100,
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
    centerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftTop:{
        flexDirection: 'row',
        marginTop:40,
    },
    centerRowTop: {
        marginTop:80,
        alignSelf:"center"
    },
    centerRowBot: {
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    gameTable: {
        alignItems:'center'
    }
})
