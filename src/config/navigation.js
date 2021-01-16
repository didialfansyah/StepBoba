import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/home';
import addProduct from '../pages/addProduct';
import editProduct from '../pages/editProduct';
import detailProduct from '../pages/detailProduct';
import Splash from '../pages/splash';
import Login from '../pages/login';
import Signup from '../pages/signup';

const NavStack = createStackNavigator();
const NavStackScreen = () => (
  <NavStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: '#00cec9' },
      headerTitleStyle: {color : '#fff'}
    }}
    initialRouteName="Splash">
    <NavStack.Screen name="Home" title="Home" component={Home} />
    <NavStack.Screen name="Add" component={addProduct} options={{headerTitle: 'Add Product'}}/>
    <NavStack.Screen name="Detail" component={detailProduct} options={{headerTitle: 'Detail Product'}}/>
    <NavStack.Screen name="Edit" component={editProduct} options={{headerTitle: 'Edit Product'}}/>
    <NavStack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
    <NavStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
    <NavStack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
  </NavStack.Navigator>
);

const Navigation = () => (
    <NavigationContainer>
      <NavStackScreen />
    </NavigationContainer>
  );
  
  export default Navigation;