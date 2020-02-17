import * as React from 'react'
import { Image } from 'react-native'
import background from 'src/assets/background.jpg'
import { styles } from './styles'

export const Background: React.StatelessComponent = () => {
  return <Image source={background} style={styles.background} />
}
