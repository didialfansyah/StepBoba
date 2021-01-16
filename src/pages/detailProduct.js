import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Input, Button, Text, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';

const detailProduct = props => {
    let deleteData = firestore().collection('bobaSeries');

    const deleteProduct = (key) => {
      deleteData
        .doc(key)
        .delete()
        .then(() => {
          alert('Product successfully deleted');
        })
        .catch((err) => {
          console.log(err);
        });
    };

    let db = firestore().collection('bobaSeries');
    const handleUpdateProduct = () => {
        db.doc(props.route.params.product.id)
        .update({
            title: props.route.params.product.title,
            desc: props.route.params.product.desc,
            price: props.route.params.product.price,
            stok: (props.route.params.product.stok - 1),
            images: props.route.params.product.images
        }).then(function (docRef) {
            alert('Product successfully Buy');
            props.navigation.navigate('Home');
        })
        .catch(function (error) {
            alert(error);
        });
    };

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#00cec9" />
        <View style={styles.content}>
            <Image
                source={{ uri: props.route.params.product.images }}
                style={{ width: '100%', height: 300, marginBottom: 10 }}
                resizeMode="contain"
            />
            <Text h2 style={{color: '#fff'}}>{props.route.params.product.title}</Text>
            <Text style={{color: '#fff', fontSize: 12}}>{props.route.params.product.price} x {props.route.params.product.stok}</Text>
            <Text style={{color: '#fff', fontSize: 16}}>{props.route.params.product.desc}</Text>
            <Button
              icon={
                <Icon
                  name="edit"
                  size={15}
                  color="white"
                />
              }
              iconRight
              title="Edit Board   "
              buttonStyle={{marginTop: 10}}
              onPress={() => props.navigation.navigate('Edit', {product: props.route.params.product})}
            />
            <Button
              icon={
                <Icon
                  name="shopping-bag"
                  size={15}
                  color="white"
                />
              }
              iconRight
              title="Buy Product x 1  "
              buttonStyle={{backgroundColor: '#6c5ce7', marginTop: 10}}
              onPress={() => handleUpdateProduct()}
            />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingTop: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fd5c63',
    width: '50%',
    padding: 10,
  },
  content: {
      width: '100%',
      backgroundColor: '#2f3542',
      padding: 20,
  }
});

export default detailProduct;