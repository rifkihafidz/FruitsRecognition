import React from 'react'
import { Text, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { BackButton } from '../../components'

const Scan = ({ navigation }) => {
  // const takePicture = async () => {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options);
  //     console.log(data.uri);
  //   }
  // };
  return (
    <View style={styles.wrapper.mainWrapper}>
      <View style={{ flexDirection: 'row' }}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginRight: 60 }}>SCAN</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.RNCamera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
      </View>
      <View>
        <Text>Test</Text>
      </View>
    </View >
  )
}

export default Scan

const styles = ({
  wrapper: {
    mainWrapper: {
      backgroundColor: '#98DDCA',
      flex: 1
    },
    topWrapper: {
      flex: 2,
      flexDirection: 'row',
    },
    middleWrapper: {
      flex: 11,
    },
    bottomWrapper: {
      flex: 4,
      backgroundColor: 'blue'
    }
  },
  RNCamera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})