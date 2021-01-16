import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';

const addProduct = ({navigation}) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const [stok, setStok] = useState();
    const [uri, setUri] = useState();

    const handleAddProduct = () => {
      firestore()
        .collection('bobaSeries')
        .add({
          title: title,
          desc: desc,
          price: price,
          stok: stok,
          images: uri
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id);
          alert('Board successfully added');
          navigation.navigate('Home');
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
          alert(error);
        });
  };

    const onChangeTitle = (title) => {
        setTitle(title);
    };
    
    const onChangeDesc = (desc) => {
        setDesc(desc);
    };

    const onChangePrice = (price) => {
        setPrice(price);
    };

    const onChangeStok = (stok) => {
        setStok(stok);
    };

    const onChangeUri = (uri) => {
        setUri(uri);
    };

    return (
        <View style={{flex: 1, padding: 10, alignItems: 'center'}}>
            <StatusBar barStyle="light-content" backgroundColor="#00cec9" />
            <Input
                placeholder="Title"
                onChangeText={(title) => onChangeTitle(title)}
            />
            <Input
                placeholder="Description"
                onChangeText={(desc) => onChangeDesc(desc)}
            />
            <Input
                placeholder="Price"
                onChangeText={(price) => onChangePrice(price)}
            />
            <Input
                placeholder="Stok"
                onChangeText={(stok) => onChangeStok(stok)}
            />
            <Input
                placeholder="Images URI"
                onChangeText={(uri) => onChangeUri(uri)}
            />
            <Button
              icon={
                <Icon
                  name="send-o"
                  size={15}
                  color="white"
                />
              }
              iconRight
              title="Add Product   "
              onPress={handleAddProduct}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#fd5c63',
      width: '50%',
      padding: 10,
    },
  });

export default addProduct;