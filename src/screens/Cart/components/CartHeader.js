import { StyleSheet, Text, View } from 'react-native'

export default function CartHeader() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>Detalhes do pedido</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    color: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    color: '#FFF',
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'MontserratBold',
    paddingTop: 24,
  },
})
