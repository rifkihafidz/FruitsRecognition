import React from 'react'
import { Text, View } from 'react-native'
import { Gap } from '../../components';
import { IconOnly } from '../../assets';
import { BackButton } from '../../components';

const About = ({ navigation }) => {
  return (
    <View style={styles.wrapper.mainWrapper}>
      <View style={{ flexDirection: 'row' }}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginRight: 60 }}>ABOUT</Text>
        </View>
      </View>
      <Gap height={6} />
      <View style={styles.wrapper.logoWrapper}>
        <IconOnly width={300} height={150} />
      </View>
      <Gap height={6} />
      <Text style={styles.text.textLogo}>About Fruits Recognition</Text>
      <Gap height={10} />
      <Text style={styles.text.textDescription}>Fruits Recognition merupakan aplikasi yang berfungsi untuk mengklasifikasikan buah-buahan menggunakan kamera smartphone secara real-time, setelah buah berhasil diklasifikasi, aplikasi ini akan menampilkan manfaat buah tersebut dalam bentuk teks dan suara.</Text>
      <Gap height={10} />
      <Text style={styles.text.textDescription}>Buah apa saja yang dapat diklasifikasikan?</Text>
      <Gap height={10} />
      <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={styles.wrapper.buahWrapper} >
          <Text style={styles.text.textBuah}>ALPUKAT</Text>
          <Text style={styles.text.textBuah}>APEL</Text>
          <Text style={styles.text.textBuah}>BUAH NAGA</Text>
          <Text style={styles.text.textBuah}>JERUK</Text>
          <Text style={styles.text.textBuah}>LEMON</Text>
        </View>
        <View style={styles.wrapper.buahWrapper} >
          <Text style={styles.text.textBuah}>NANAS</Text>
          <Text style={styles.text.textBuah}>PIR</Text>
          <Text style={styles.text.textBuah}>PISANG</Text>
          <Text style={styles.text.textBuah}>SEMANGKA</Text>
          <Text style={styles.text.textBuah}>TOMAT</Text>
        </View>
      </View>
      <View style={styles.wrapper.copyrightWrapper}>
        <Text style={styles.text.textCopyright}>© 2021 Muhammad Rifki Hafidz - All Rights Reserved</Text>
      </View>
    </View >
  )
}

export default About

const styles = ({
  wrapper: {
    copyrightWrapper: {
      flex: 1, flexDirection: 'column-reverse', paddingBottom: 10
    },
    buahWrapper: {
      flex: 1, alignItems: 'center'
    },
    logoWrapper: {
      alignItems: 'center'
    },
    mainWrapper: {
      backgroundColor: '#98DDCA',
      flex: 1,
    },
  },
  text: {
    textBuah: {
      color: '#FFFFFF', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, fontWeight: 'bold'
    },
    textCopyright: {
      fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
    textDescription: {
      fontSize: 15, color: '#FFFFFF', textAlign: 'center', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10,
    },
    textLogo: {
      fontSize: 32, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
  }
})
