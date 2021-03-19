import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTow from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceSix);

  const setRan = (DiceState, RAN) => {
    switch (RAN) {
      case 1:
        DiceState(DiceOne);
        break;
      case 2:
        DiceState(DiceTow);
        break;
      case 3:
        DiceState(DiceThree);
        break;
      case 4:
        DiceState(DiceFour);
        break;
      case 5:
        DiceState(DiceFive);
        break;
      case 6:
        DiceState(DiceSix);
        break;

      default:
        break;
    }
  };

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 7);
    let randomNumber2 = Math.floor(Math.random() * 7);
    setRan(setUri, randomNumber);
    setRan(setUri2, randomNumber2);
  };

  return (
    <>
      <StatusBar backgroundColor={'#222831'} />

      <View style={styles.Container}>
        <Pressable onPress={playButtonTapped}>
          <Image source={uri} style={styles.image} />

          <Image source={uri2} style={styles.image} />
        </Pressable>
        <TouchableOpacity onPress={playButtonTapped}>
          <Text style={styles.text}>
            Play Game {uri} {uri2}
          </Text>
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
