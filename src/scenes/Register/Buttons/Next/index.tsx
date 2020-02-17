import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { strings } from './strings'
import { styles } from './styles'

export function Next() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{strings.next}</Text>
      </TouchableOpacity>
    </View>
  )
}
