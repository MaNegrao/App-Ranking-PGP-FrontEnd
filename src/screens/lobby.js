import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import { AuthSession } from 'expo';
import { ScrollView } from 'react-native';
import Search from '..components/searchPlayers';

export default class Lobby extends Component {
    state = {
        player1: '',
        player2: '',
        player3: '',
        player4: '',
        searchNick: '',
        searchedUsers: [
            {
                id: 1,
                nick: 'Nicolas',
                ranking: '18º'
            },
            {
                id: 2,
                nick: 'Matheus',
                ranking: '1º',
            },
            {
                id: 5,
                nick: 'William',
                ranking: '16º'
            },
            {
                id: 7,
                nick: 'Negrão',
                ranking: '26º',
            },
            {
                id: 7,
                nick: 'Vitor',
                ranking: '100º',
            },
            {
                id: 7,
                nick: 'Negrão',
                ranking: '26º',
            },
            {
                id: 7,
                nick: 'Vitor',
                ranking: '100º',
            },
            {
                id: 7,
                nick: 'Vitor',
                ranking: '100º',
            },
            {
                id: 7,
                nick: 'Negrão',
                ranking: '26º',
            },
            {
                id: 7,
                nick: 'Vitor',
                ranking: '100º',
            }
        ]
    }
    renderItem = ({item}) => (
        <View style = {styles.lt}>
            <View style = {styles.list}>
                <Image source={
            				require('../assets/images/miniicon.png')
            				} style={styles.icone}/>
                <Text style = {styles.nick}>{item.nick}</Text>
                <Text style = {styles.rk}>  (Ranking: {item.ranking})</Text>
                <TouchableOpacity
							onPress={this.loginSubmit}
							title="Login"
							style={styles.button}>
						<Text style = {styles.text}>CONVIDAR</Text>
				</TouchableOpacity>

            </View>
        </View>
    )

    onSeatPress = () => {

    }

    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.centerRowTop}>
                    <TouchableOpacity
                        onPress={this._signOutAsync}
                    >
                        <Image source={
                        require('../assets/images/back.png')
                        } style={styles.img2}/>
                    </TouchableOpacity>
                    <Image source={
            				require('../assets/images/miniicon.png')
            				} style={styles.icone}/>
                </View>
                <View style={styles.gameTable}>
                    <View style={styles.centerRowTop}>
                        <TouchableOpacity
                            onPress={this.onSeatPress}
                        >
                            <Image source={
            				require('../assets/images/seat_top.png')
            				} style={styles.img2}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.centerRow}>
                        <TouchableOpacity
                            onPress={this.onSeatPress}
                        >
                            <Image source={
            				require('../assets/images/seat_left.png')
            				} style={styles.img}/>
                        </TouchableOpacity>
                        <Image source={
                            require('../assets/images/table.png')
                        } style={styles.table}/>
                        <TouchableOpacity
                            onPress={this.onSeatPress}
                        >
                            <Image source={
            				require('../assets/images/seat_right.png')
            				} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.centerRowBot}>
                        <TouchableOpacity
                            onPress={this.onSeatPress}
                        >
                            <Image source={
            				require('../assets/images/seat_bot.png')
            				} style={styles.img2}/>
                        </TouchableOpacity>
                    </View>

                </View>
                <View>
                    <View style={styles.bar}></View>
                </View>
                <View>
                    <TextInput
                        style = {styles.input}
                        value={this.state.searchNick}
                        returnKeyType="search"
                        placeholder="Busca por Nick"
                        onChangeText={(searchNick) => this.setState({searchNick})}
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
        )
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
        resizeMode: 'contain'
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
    centerRowTop: {
        marginTop:40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    centerRowBot: {
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    gameTable: {
        alignItems:'center'
    },
    bar:{
        backgroundColor: 'black',
        width:500,
        height: 30,
    }

})
