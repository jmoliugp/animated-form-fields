import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import userAvatar from 'src/assets/userAvatar.png'
import { TextFormField } from 'src/scenes/Register/Fields/TextFormField'
import { strings } from './strings'
import { styles } from './styles'
import { Background } from 'src/scenes/Register/Background'

export default function home() {
  return (
    <>
      <Background />
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <View style={styles.userAvatarContainer}>
            <Image source={userAvatar} style={styles.userAvatar} />
          </View>
          <TextFormField placeholder={strings.name} />
          <TextFormField placeholder={strings.email} />
          <TextFormField placeholder={strings.password} />
        </View>
      </SafeAreaView>
    </>
  )
}
