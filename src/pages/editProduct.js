import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const editProduct = props => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const [stok, setStok] = useState();
    const [uri, setUri] = useState();

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

    let db = firestore().collection('bobaSeries');
  const handleUpdateProduct = () => {
    db.doc(props.route.params.product.id)
      .update({
        title: title,
        desc: desc,
        price: price,
        stok: stok,
        images: uri
      }).then(function (docRef) {
        alert('Product successfully updated');
        props.navigation.navigate('Home');
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#00cec9" />
      {/* <Text>Update Product</Text> */}
      <Input
        placeholder={props.route.params.product.title}
        onChangeText={(title) => onChangeTitle(title)}
      />
      <Input
        placeholder={props.route.params.product.desc}
        onChangeText={(desc) => onChangeDesc(desc)}
      />
      <Input
        placeholder={props.route.params.product.price}
        onChangeText={(price) => onChangePrice(price)}
      />
      <Input
        placeholder={props.route.params.product.stok.toString()}
        onChangeText={(stok) => onChangeStok(stok)}
      />
      <Input
        placeholder={props.route.params.product.images}
        onChangeText={(uri) => onChangeUri(uri)}
      />

      <Button
              icon={
                <Icon
                  name="edit"
                  size={15}
                  color="white"
                />
              }
              iconRight
              title="Edit Product   "
              onPress={() => handleUpdateProduct()}
            />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fd5c63',
    width: '50%',
    padding: 10,
  },
});

export default editProduct;