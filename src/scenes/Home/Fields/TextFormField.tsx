import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './styles'
import { Colors } from 'src/scenes/styles/Colors'

interface Props {
  placeholder: string
}

export function TextFormField({ placeholder }: Props) {
  return (
    <View style={styles.formTextFieldContainer}>
      <TextInput
        placeholderTextColor={Colors.background}
        placeholder={placeholder}
        style={styles.formTextField}
      ></TextInput>
      <View style={styles.formTextBar} />
    </View>
  )
}
