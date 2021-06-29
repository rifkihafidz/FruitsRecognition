import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-react-native'
import { bundleResourceIO } from '@tensorflow/tfjs-react-native'

const TestPage = () => {
  const modelJSON = require('../../assets/Model/model.json');
  const modelWeights = require('../../assets/Model/group1-shard.bin');
  const [tfReady, setTfReady] = useState(null);
  const [modelReady, setModelReady] = useState(null);

  useEffect(async () => {
    await tf.ready();
    setTfReady(true);
    const model = await tf.loadLayersModel(bundleResourceIO(modelJSON, modelWeights));
    setModelReady(true);
    return () => {
      cleanup
    }
  }, []);

  return (
    <View>
      <Text>TFJS Status : {tfReady ? <Text>Yes</Text> : <Text>No</Text>}</Text>
      <Text>Model Status : {modelReady ? <Text>Yes</Text> : <Text>No</Text>}</Text>
    </View>
  )
}

export default TestPage
