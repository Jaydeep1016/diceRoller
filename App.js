import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTow from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';
const App = () => {
  const uri = DiceFive;
  return (
    <>
      <View style={styles.Container}>
        <Image source={uri} style={styles.image} />
        <TouchableOpacity>
          <Text style={styles.text}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    // color: '#D58E0A',
    fontSize: 25,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 2,
    color: '#F2A365',
    fontWeight: 'bold',
  },
  Container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
