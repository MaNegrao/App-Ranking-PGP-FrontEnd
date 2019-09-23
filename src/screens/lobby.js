import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image} from 'react-native';

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
            },
            {
                id: 2,
                nick: 'Matheus',
            }
        ]
    }
    renderItem = ({item}) => (
        <View>
            <Text>{item.nick}</Text>
        </View>
    )

    onSeatPress = () => {

    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.gameTable}>
                    <View>
                        <TouchableOpacity
                            onPress={this.onSeatPress}
                        >
                            <Image source={
            				require('../assets/images/seat.png')
            				}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.centerRow}>
                        <TouchableOpacity
                            onPress={this.onSeatPress}
                        >
                            <Image source={
            				require('../assets/images/seat.png')
            				}/>
                        </TouchableOpacity>
                        <Image source={
                            require('../assets/images/table.png')
                        }/>
                        <TouchableOpacity
                            onPress={this.onSeatPress}
                        >
                            <Image source={
            				require('../assets/images/seat.png')
            				}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={this.onSeatPress}
                        >
                            <Image source={
            				require('../assets/images/seat.png')
            				}/>
                        </TouchableOpacity>
                    </View>

                </View>
                <View>
                    <TextInput
                        style = {styles.input}
                        value={this.state.searchNick}
                        returnKeyType="search"
                        placeholder="Busca por Nick"
                        onChangeText={(searchNick) => this.setState({searchNick})}
                    />
                    <Text>{this.state.searchNick}</Text>
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
        padding: 10
    },
    input: {
        padding: 20,
        fontSize: 30,
        borderRadius: 0,
        borderWidth: 2,
        borderColor: 'black'
    },
    centerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    gameTable: {
        alignItems:'center'
    }
})
