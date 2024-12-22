
import express from 'express'
import { Updateproduct, deleteproduct, getAllProducts, getproductByid, postProducts } from '../Controllar/ProductControllar.js'
const productRoutes = express.Router()


productRoutes.get('/', getAllProducts)
productRoutes.post('/', postProducts )
productRoutes.get('/productById/:id', getproductByid )
productRoutes.put('/productUpdate/:id', Updateproduct)
productRoutes.delete('/productDelete/:id', deleteproduct)




export default productRoutes