import React from 'react'
import { Image, Text, SafeAreaView, View } from 'react-native'
import { styles } from './styles'
import userAvatar from 'src/assets/userAvatar.png'

export default function home() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <View style={styles.userAvatarContainer}>
            <Image source={userAvatar} style={styles.userAvatar} />
          </View>
          <Text>Sample App</Text>
        </View>
      </SafeAreaView>
    </>
  )
}
