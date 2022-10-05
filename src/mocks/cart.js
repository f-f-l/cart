import StoreAvatar from '../../assets/StoreAvatar.png'
import tomate from '../../assets/frutas/Tomate.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import batata from '../../assets/frutas/Batata.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'

const cart = {
  productHeader: {
    title: 'Detalhes do pedido',
  },
  productDetails: {
    name: 'Kit Mild Brew',
    banner: StoreAvatar,
    store: 'The Mild Brew Coffeehouse',
    description:
      'Um kit com produtos selecionados cuidadosamente para o seu café da manhã.',
    price: 'R$40,00',
    button: 'Comprar',
  },
  kitItens: {
    title: 'Itens do Kit',
    list: [
      {
        name: 'Café',
        image: tomate,
      },
      {
        name: 'Tapioca',
        image: brocolis,
      },
      {
        name: 'Abacaxi',
        image: batata,
      },
      {
        name: 'Melancia',
        image: pepino,
      },
      {
        name: 'Bolo',
        image: abobora,
      },
    ],
  },
}

export default cart
