import { configureStore } from '@reduxjs/toolkit'
import commandeSlice from './commandeSlice'

import productslice from './productslice'
import  produitslice  from './Produitslice'
import serviceslice from './serviceslice'


import userSlice from './userslice/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productslice,
    service: serviceslice,
    produit: produitslice,
    commande: commandeSlice,
  },
})