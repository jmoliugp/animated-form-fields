import { StyleSheet } from 'react-native'
import { Colors } from 'src/scenes/styles/Colors'
import {
  normalizedFontSize,
  normalizedHeight,
  normalizedWidth,
} from 'src/scenes/styles/scale'

export const styles = StyleSheet.create({
  formTextFieldContainer: {
    marginBottom: normalizedHeight(20),
    width: normalizedWidth(190),
  },
  formTextBar: {
    backgroundColor: Colors.background,
    height: normalizedHeight(1),
  },
  formTextField: {
    fontSize: normalizedFontSize(15),
    height: normalizedHeight(35),
    textAlign: 'left',
  },
})
