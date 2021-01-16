import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TouchableOpacity, StyleSheet, Image, StatusBar} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Input, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

import { LgBubble } from '../assets';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChangeEmail = (email) => {
    setEmail(email);
  };

  const onChangePassword = (password) => {
    setPassword(password);
  };

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        console.log(resp);
        alert('Login successfully');
        navigation.replace('Home');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#00cec9" />
      <Image
        source={LgBubble}
        style={styles.strach}
        resizeMode="contain"
      />
      <Text h4 style={{marginBottom: 20}}>StepBoba</Text>
      <Input
        placeholder="Email"
        rightIcon={
            <Icon
              name='user'
              size={24}
              color='#00cec9'
            />
        }
        onChangeText={(email) => onChangeEmail(email)}
      />
      <Input
        placeholder="Password"
        rightIcon={
            <Icon
              name='lock'
              size={24}
              color='#00cec9'
            />
        }
        secureTextEntry={true}
        onChangeText={(password) => onChangePassword(password)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('Signup')}>
        Dont have an account? Register here
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00cec9',
    width: '100%',
    padding: 10,
    marginBottom: 20
  },
  strach: {
    width: '40%',
    height: 150,
    padding: 0,
    marginBottom: 0,
  },
});

export default Login;