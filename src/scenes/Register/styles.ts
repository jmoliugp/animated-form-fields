import { StyleSheet } from 'react-native'
import { Colors } from 'src/scenes/styles/Colors'
import {
  normalizedWidth,
  normalizedHeight,
  normalizedFontSize,
} from 'src/scenes/styles/scale'

export const styles = StyleSheet.create({
  background: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  container: {
    alignItems: 'stretch',
    color: Colors.background,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: normalizedWidth(16),
    marginVertical: normalizedHeight(35),
    paddingHorizontal: normalizedWidth(16),
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
  userAvatar: {
    borderRadius: 100,
    height: normalizedWidth(80),
    width: normalizedWidth(80),
  },
  userAvatarContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 100,
    flexDirection: 'column',
    height: normalizedWidth(90),
    justifyContent: 'center',
    transform: [{ translateY: -normalizedHeight(30) }],
    width: normalizedWidth(90),
  },
  formTextFieldContainer: {
    width: normalizedWidth(190),
  },
})
