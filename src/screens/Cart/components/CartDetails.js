import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import CartButton from './CartButton'

export default function CartDetails({
  name,
  banner,
  store,
  description,
  price,
  button,
}) {
  return (
    <>
      <Text style={styles.productTitle}>{name}</Text>
      <View style={styles.storeContainer}>
        <Image style={styles.storeAvatar} source={banner} />
        <Text style={styles.storeName}>{store}</Text>
      </View>
      <Text style={styles.productDescription}>{description}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  productTitle: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'MontserratBold',
  },
  storeContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  storeAvatar: {
    width: 32,
    height: 32,
  },
  storeName: {
    fontSize: 16,
    fontHeight: 26,
    marginLeft: 12,
    paddingTop: 4,
    fontFamily: 'MontserratRegular',
  },
  productDescription: {
    color: '#A3A3A3',
    fontSize: 16,
    fontHeight: 26,
    fontFamily: 'MontserratRegular',
  },
  productPrice: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
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
