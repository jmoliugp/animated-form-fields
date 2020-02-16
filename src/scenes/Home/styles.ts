import { StyleSheet } from 'react-native'
import { Colors } from 'src/scenes/styles/Colors'
import { normalizedWidth, normalizedHeight } from 'src/scenes/styles/scale'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    color: Colors.background,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  form: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: normalizedWidth(16),
    marginVertical: normalizedHeight(35),
  },
  userAvatar: {
    borderRadius: 100,
    width: normalizedWidth(80),
    height: normalizedWidth(80),
  },
  userAvatarContainer: {
    backgroundColor: 'black',
    borderRadius: 100,
    width: normalizedWidth(90),
    height: normalizedWidth(90),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -normalizedHeight(210) }],
  },
})
