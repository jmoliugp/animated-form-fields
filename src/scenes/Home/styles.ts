import { StyleSheet } from 'react-native'

export const homeStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    color: 'red',
    fontSize: 20,
    marginTop: '15%',
    paddingBottom: 10,
  },
  textInput: {
    color: 'black',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    height: 20,
    minHeight: '3%',
    paddingLeft: 10,
  },
  textInputContainer: {
    alignItems: 'baseline',
    borderBottomWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingRight: 10,
  },
})

export const listStyles = StyleSheet.create({
  listContainer: {
    alignItems: 'stretch',
    borderBottomWidth: 1.5,
    borderColor: '#aaaaaa',
    flexDirection: 'row',
    marginTop: '5%',
    minHeight: 40,
    width: '100%',
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: 'green',
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 6,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  verticalLine: {
    borderBottomColor: 'green',
    borderBottomWidth: 4,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15,
    position: 'absolute',
    width: '100%',
  },
})
