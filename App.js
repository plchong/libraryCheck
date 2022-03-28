import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';

const App = () => {

  const [uri, setUri] = useState();
  const [imageList, setImageList] = useState([]);
  const [baronhaImageList, setBaronhaImageList] = useState();

  const onPressImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log('image: ', image.height);
      setUri(image.path);
      setImageList(image);
    });
  }

  const onPressMultipleImage = async () => {
    const resp = await MultipleImagePicker.openPicker();
    setBaronhaImageList(resp);
  }

  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
        <TouchableOpacity onPress={onPressImage}>
          { uri ? (
            <Image
              style={{height: imageList.height, width: imageList.width}}
              source={{uri: uri}}
            />
            ) : (
            <Text>react-native-image-crop-picker</Text>
          )
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressMultipleImage}>
          { baronhaImageList ? (
            baronhaImageList.map((item, index) => {
              return (
                <Image
                style={{height: item.height, width: item.width}}
                  source={{uri: item.path}}
                />
              )
            })
            ) : (
            <Text>@baronha/react-native-multiple-image-picker</Text>
          )
          }
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '300%',
    borderWidth: 10,
  }
});

export default App;
