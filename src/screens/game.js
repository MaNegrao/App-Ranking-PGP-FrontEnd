import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Counter from '../components/Counter';
import { isNullLiteralTypeAnnotation, isPipelineBareFunction } from '@babel/types';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image source={
          require('../assets/images/paus.png')
        }
        style={styles.welcomeImage
        }/>
      </View>
      <View style={styles.counterContainer}>
        <Counter />
        <Counter />
      </View>  
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Counter',
};

const styles = StyleSheet.create({
  welcomeImage: {
    width: 170,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  welcomeContainer: {
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
