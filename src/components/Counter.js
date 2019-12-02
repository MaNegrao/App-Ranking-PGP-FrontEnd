import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Counter extends Component {

  state = {
    count: 0
  }

  handleIncrement = async () => {
    await this.setState({
      count: (this.state.count + 1) < 12 ? (this.state.count + 1) : 12
    });
    
    await this.props.functionSetScore(this.props.team, this.state.count, this.state.count == 12 ? 1 : 0);

    if(this.state.count == 12)
      this.props.functionEndGame();
  }

  handleDecrement = async () => {
    await this.setState({
      count: this.state.count == 0 ? 0 : this.state.count - 1
    });

    await this.props.functionSetScore(this.props.team, this.state.count, this.state.count == 12 ? 1 : 0);
  }

  render(){
    const { count } = this.state;
    return (
      <View style={styles.container} className="counter">
        <Text style={styles.text}>{ count }</Text>
        <TouchableOpacity style={styles.incrementButton} onPress={this.handleIncrement}>
         <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.decrementButton} onPress={this.handleDecrement}>
         <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  incrementButton:{
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 10,
  },
  decrementButton:{
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10
  },
  buttonText:{
    color: 'white',
    fontSize: 50,
  }
});


export default Counter;