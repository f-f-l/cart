import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading'

// import Header from './src/screens/Cart/components/Header'
import Cart from './src/screens/Cart'
import mock from './src/mocks/cart'

export default function App() {
  const [fonts] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  })

  if (!fonts) {
    return <AppLoading />
  }

  return (
    <>
      <SafeAreaView>
        <StatusBar />
        <Cart {...mock} />
      </SafeAreaView>
    </>
  )
}
