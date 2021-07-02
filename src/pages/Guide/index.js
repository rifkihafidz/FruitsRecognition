import React from 'react'
import { Text, View } from 'react-native'
import { Gap } from '../../components';
import { IconOnly } from '../../assets';
import { BackButton } from '../../components';

const Guide = ({ navigation }) => {
  return (
    <View style={styles.wrapper.mainWrapper}>
      <View style={{ flexDirection: 'row' }}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center', marginRight: 60 }}>GUIDE</Text>
        </View>
      </View>
      <Gap height={6} />
      <View style={styles.wrapper.logoWrapper}>
        <IconOnly width={300} height={150} />
      </View>
      <Gap height={6} />
      <Text style={styles.text.textLogo}>Cara Menggunakan Aplikasi</Text>
      <Gap height={10} />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.wrapper.buahWrapper}>
          <Text style={styles.text.textBuah}>Pilih 'Scan' pada menu utama</Text>
          <Text style={styles.text.textBuah}>Arahkan kamera ponsel Anda ke buah yang di klasifikasi</Text>
          <Text style={styles.text.textBuah}>Presentase hasil prediksi buah akan muncul di bagian bawah layar ponsel Anda</Text>
          <Text style={styles.text.textBuah}>Jika dalam 3 detik presentase hasil prediksi tidak berubah, maka aplikasi akan otomatis melakukan screenshot layar ponsel Anda dan mengklasifikasikan gambar hasil screenshot tersebut</Text>
          <Text style={styles.text.textBuah}>Hasil klasifikasi dan manfaat buah akan ditampilkan di layar ponsel Anda</Text>
        </View>
      </View>
      <View style={styles.wrapper.copyrightWrapper}>
        <Text style={styles.text.textCopyright}>© 2021 Muhammad Rifki Hafidz - All Rights Reserved</Text>
      </View>
    </View >
  )
}

export default Guide

const styles = ({
  wrapper: {
    copyrightWrapper: {
      flex: 1, flexDirection: 'column-reverse', paddingBottom: 10
    },
    buahWrapper: {
      flex: 1, alignItems: 'flex-start', paddingHorizontal: 25
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
      color: '#FFFFFF', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, fontWeight: 'bold', textAlign: 'left', marginBottom: 8, fontSize: 16
    },
    textCopyright: {
      fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
    textDescription: {
      fontSize: 15, color: '#FFFFFF', textAlign: 'center', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10,
    },
    textLogo: {
      fontSize: 28, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center',
    },
  }
})
