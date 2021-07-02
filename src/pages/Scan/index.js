import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, LogBox } from 'react-native'
import { BackButton } from '../../components'
import { Gap } from '../../components';
import { Camera } from 'expo-camera';
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native'
import { bundleResourceIO } from '@tensorflow/tfjs-react-native'


const Scan = ({ navigation }) => {
  const [tfReady, setTfReady] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    // Ignore Yellow Warning
    LogBox.ignoreAllLogs();
    // Check Tensorflow Ready
    await tf.ready();
    setTfReady(true);
    // Check Model Ready
    const modelJSON = require('../../assets/Model/model.json');
    const modelWeights = require('../../assets/Model/group1-shard.bin');
    await tf.loadLayersModel(bundleResourceIO(modelJSON, modelWeights));
    setModelReady(true);
    setLoading(false);
  });

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <Text>Null permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }



  return (
    <View style={styles.wrapper.mainWrapper}>
      {loading ? (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <ActivityIndicator size="large" color="#0000ff" animating={loading} />
          <Gap height={10} />
          <Text style={{ textAlign: 'center' }}>Waiting for Tensorflow and Model Ready...</Text>
          <Text style={{ textAlign: 'center' }}>Tensorflow Status: {tfReady ? <Text>Ready</Text> : <Text>Not Ready</Text>}</Text>
          <Text style={{ textAlign: 'center' }}>Model Status: {modelReady ? <Text>Ready</Text> : <Text>Not Ready</Text>}</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginRight: 60 }}>SCAN</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Camera style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }} type={type}>
            </Camera>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={{ width: 30, height: 30 }} onPress={() => { setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back); }}><Text style={{ textAlign: 'center' }}>Flip</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
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