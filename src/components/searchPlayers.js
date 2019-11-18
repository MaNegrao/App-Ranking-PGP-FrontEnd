import React, {Component} from 'react';
import api from '../services/api'
import {Modal, FlatList, TouchableOpacity, Text, TextInput, View, StyleSheet, Image, AsyncStorage} from 'react-native';

class Search extends Component {
  state = {
    modalVisible: false,
    player: '',
    searchNick: '',
    searchedUsers: [],
  };

  getPlayers = async () => {
        const token = await AsyncStorage.getItem('userToken')
        const headers = {
            'Authorization': 'Bearer ' + token
        }

        await api.get('/search/'+this.state.searchNick, {headers: headers}
        ).then((response) => {
            this.setState({
                searchedUsers: response.data
            })
        }).catch((error) => {
            this.setState({
                searchedUsers: []
            })
        });

  }

  handleInputChange = (searchNick) => {
       this.setState({
           searchNick
       })
       this.getPlayers()

  }
   

  handleClick = (nick) =>{
    this.onSeatPress(false)
    this.setState({player:'kkkkk'})

  }

  onSeatPress(visible) {
    this.setState({modalVisible: visible});
  }

  renderItem = ({item}) => (
    <View style = {styles.lt}>
        <View style = {styles.list}>
            <Image source={
                        require('../assets/images/miniicon.png')
                        } style={styles.icone}/>
            <Text style = {styles.nick}>{item.nick}</Text>
            <Text style = {styles.rk}>  (Ranking: {item.wins})</Text>
            <TouchableOpacity
                        value = {item.nick}
                        onPress={(nick) => this.handleClick(nick)}
                        title="Login"
                        style={styles.button}>
                    <Text style = {styles.text}>CONVIDAR</Text>
            </TouchableOpacity>
        </View>
    </View>
)

  render() {
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };
    const {player} = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
            <View>
                <View>
                    <View style={styles.bar}></View>
                    <TouchableOpacity
                        onPress={() => {this.onSeatPress(false);}}
                        title="voltar"
                        style={styles.button}>
                        <Text style = {styles.text}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style = {styles.input}
                        value = {this.state.searchNick}
                        returnKeyType="search"
                        placeholder="Busca por Nick"
                        onChangeText={(searchNick) => this.handleInputChange(searchNick)}
                    />
                </View>
                <View style={styles.lt}>
                    <FlatList
                        data={this.state.searchedUsers}
                        keyExtractor={item => item.id}
                        renderItem={this.renderItem}
                        />
                </View>
            </View>
        </Modal>

        <TouchableOpacity
            onPress={() => {this.onSeatPress(true);}
            }>
            <Image source={
                require('../assets/images/seat_bot.png')
                } style={styles.seatImg}/>
            </TouchableOpacity>
        <Text>{player}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button:{
        backgroundColor:'black',
        alignSelf: 'center',
        padding:5
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
		fontSize: 20,
		color: 'white',
		textAlign:'center'
	},
    icone:{
        alignSelf: 'center'
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
})


export default Search;
