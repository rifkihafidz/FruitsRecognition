import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBack } from '../../../assets';


const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ margin: 8 }}>
      <IconBack width={40} height={40} onPress={onPress} />
    </TouchableOpacity>
  )
}

export default BackButton