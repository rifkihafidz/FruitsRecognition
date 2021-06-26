import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { IconOnly } from '../../assets'
import { Gap } from '../../components';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <IconOnly width={450} height={300} />
      <Gap height={6} />
      <Text style={styles.textWrapper.textTop}>Fruits Recognition</Text>
      <Gap height={12} />
      <Text style={styles.textWrapper.textBottom}>Helps you to find out the benefits of fruits</Text>
    </View>
  )
}

export default SplashScreen;

const styles = {
  container: {
    backgroundColor: '#98DDCA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    textTop: {
      fontSize: 40, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
    },
    textBottom: {
      fontSize: 18, color: '#FFFFFF', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10,
    }
  }
}