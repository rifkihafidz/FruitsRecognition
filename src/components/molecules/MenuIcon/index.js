import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { IconExit, IconInformation, IconOnly, IconScan } from '../../../assets'

const MenuIcon = ({ iconMenu, textMenu }) => {
  return (
    <TouchableOpacity>
      <IconScan width={125} height={125} />
      <Text style={styles.textMenu}>{textMenu}</Text>
    </TouchableOpacity>
  )
}

export default MenuIcon

const styles = StyleSheet.create({
  icon: {
    height: 125, width: 125
  },
  textMenu: {
    fontSize: 25, color: '#FFFFFF', fontWeight: 'bold', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: 'center'
  }
})
