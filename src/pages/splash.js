import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

import { LgBubble } from '../assets';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });

  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#00cec9" />
      <Image
        source={LgBubble}
        style={style.strach}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00cec9',
  },
  strach: {
    width: '80%',
    height: 200,
  },
});

export default Splash;