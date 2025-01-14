import express from 'express'
import { AddProductQty, AllProductQty } from '../Controllar/TotalProducts.js'

const ProductQtyRoute = express.Router()

ProductQtyRoute.post('/', AddProductQty)
ProductQtyRoute.get('/', AllProductQty)


export default ProductQtyRoute;