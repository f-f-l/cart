import { FlatList, ScrollView, StyleSheet, View } from 'react-native'

import Banner from './components/CartBanner'
import CartDetails from './components/CartDetails'
import CartItem from './components/CartItem'

export default function Cart({ productHeader, productDetails, kitItens }) {
  return (
    <>
      <FlatList
        data={kitItens.list}
        renderItem={CartItem}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return
          ;<>
            <Banner {...productHeader} />
            <View style={styles.cartContainer}>
              <CartDetails {...productDetails} />
              <CartItem {...kitItens} />
            </View>
          </>
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cartContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})
