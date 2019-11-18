import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Counter from '../components/Counter';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Image source={require('../assets/images/miniicon.png')} style={styles.profileImage}/>
          <Text>Usuario um</Text>
        </View>
        <View>
          <Image source={require('../assets/images/miniicon.png')} style={styles.profileImage}/>
          <Text>Usuario Dois</Text>
        </View>
        <Image source={require('../assets/images/miniicon.png')} style={styles.headerImage}/>
        <View>
          <Image source={require('../assets/images/miniicon.png')} style={styles.profileImage}/>
          <Text>Usuario um</Text>
        </View>
        <View>
          <Image source={require('../assets/images/miniicon.png')} style={styles.profileImage}/>
          <Text>Usuario Dois</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <Counter />
        <Counter />
      </View>  
    </View>
  );
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
