import productModal from "../Models/productModal.js"



export const getAllProducts = (req,res) =>{
    productModal.find({}).then((product)=>{
        res.send(product)
    })
}

export const postProducts = async (req,res) =>{
    try{
        const newproduct = new productModal(req.body)
        await productModal.create(newproduct)
        res.send(newproduct)
    }catch(err){
        res.send(err)
    }
}

export const Updateproduct = async (req,res) =>{
    try{
        const product = await productModal.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(product)
    }catch(err){
        res.send(err)
    }
}


export const getproductByid = async (req,res) => {


    try{
        const product = await productModal.findById(req.params.id)
        res.send(product)
    }catch(err){
        res.send(err)
    }
}

export const deleteproduct = async (req,res) =>{
    try{
        const product = await productModal.findByIdAndDelete(req.params.id)
        res.send(product)
    }catch(err){
        res.send(err)
    }
}