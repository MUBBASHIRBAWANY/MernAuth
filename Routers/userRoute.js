import express from 'express'
import { userRegister,userProfile,userLogin , userLogout} from '../Controllar/userControllar.js'
const userRoute = express.Router()

const app = express()

userRoute.post('/', uploads.fields([
    {name: 'image', maxCount: 1},
]),userRegister)
userRoute.post('/profile', userProfile)
userRoute.post('/login', userLogin)
userRoute.post('/logout', userLogout)
userRoute.get('/', (req,res)=>{
res.send('user route')
 
})


export default userRoute