import { StyleSheet, Text, View, Image } from 'react-native'

export default function CartItem({ item: { name, image } }) {
  return (
    <>
      <View style={styles.item} key={name}>
        <Image style={styles.image} source={image} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontFamily: 'MontserratBold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
})
