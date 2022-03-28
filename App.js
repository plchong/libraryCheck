import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {

  const [uri, setUri] = useState();

  const onPressImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {

      setUri(image.path)
      console.log(image);
      console.log(image.path);
      console.log(image.sourceURL);
    });
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPressImage}>
        { uri ? (
          <Image
            style={styles.imageStyle}
            source={{uri: uri}}
          />
          ) : (
          <Text>Select</Text>
        )
        }
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%'
  }
});

export default App;
