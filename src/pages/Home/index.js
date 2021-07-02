import React from 'react'
import { View, TouchableOpacity, Text, BackHandler } from 'react-native'
import { Gap } from '../../components';
import { IconExit, IconGuide, IconInformation, IconOnly, IconScan } from '../../assets';


const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper.mainWrapper}>
      <View style={styles.wrapper.topWrapper}>
        <IconOnly width={400} height={200} />
        <Gap height={6} />
        <Text style={styles.text.textLogo}>Fruits Recognition</Text>
      </View>
      <View style={styles.wrapper.bottomWrapper}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
            <IconScan width={110} height={110} />
            <Text style={styles.text.textMenu}>Scan</Text>
          </TouchableOpacity>
          <Gap width={60} />
          <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
            <IconGuide width={110} height={110} />
            <Text style={styles.text.textMenu}>Guide</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <IconInformation width={110} height={110} />
            <Text style={styles.text.textMenu}>About</Text>
          </TouchableOpacity>
          <Gap width={60} />
          <TouchableOpacity onPress={() => BackHandler.exitApp()}>
            <IconExit width={110} height={110} />
            <Text style={styles.text.textMenu}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default Home

const styles = {
  wrapper: {
    mainWrapper: {
      backgroundColor: '#98DDCA',
      flexDirection: 'column',
      flex: 1
    },
    topWrapper: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomWrapper: {
      flex: 6,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
  },
  text: {
    textLogo: {
      fontSize: 40, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
    },
    textMenu: {
      fontSize: 25, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
    }
  }
}