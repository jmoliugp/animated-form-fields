import { StyleSheet } from 'react-native'
import { Colors } from 'src/scenes/styles/Colors'
import { normalizedHeight, normalizedFontSize } from 'src/scenes/styles/scale'

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 8,
    flexDirection: 'row',
    height: normalizedHeight(35),
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    alignSelf: 'center',
    color: Colors.white,
    fontSize: normalizedFontSize(15),
  },
})
