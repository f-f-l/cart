import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function CartButton({ button }) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'MontserratBold',
  },
})
