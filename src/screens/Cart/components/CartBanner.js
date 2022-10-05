import { StyleSheet, Image, Text, View } from 'react-native'
import CoffeeBanner from '../../../../assets/CoffeeBanner.png'

export default function CartBanner({ title }) {
  return (
    <View>
      <Image source={CoffeeBanner} style={styles.header} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 320,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'left',
    fontFamily: 'MontserratRegular',
    fontSize: 20,
    paddingLeft: 16,
    paddingTop: 280,
    color: '#FFF',
  },
})
