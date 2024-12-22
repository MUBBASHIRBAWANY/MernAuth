import FocModel from '../Models/FocModel.js'


export const getAllFoc = async (req,res) =>{
    try {
        const foc = await FocModel.find({})
        res.send(foc)
    } catch (error) {
        console.log(error)
    }
}

export const postFoc = async (req,res) =>{
    try{
        const foc = new FocModel(req.body)
        await FocModel.create(foc)
        res.send(foc)
    }catch(err){
        console.log(err)
    }
}


export const updateFoc = async (req,res) =>{
    
    try{
        const foc = await FocModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(foc)
    }catch(err){
        console.log(err)
    }
}

export const deleteFoc = async (req,res) =>{
    try{
        await FocModel.findByIdAndDelete(req.params.id)
        res.send({message:"Foc deleted successfully"})
    }catch(err){
        console.log(err)
    }
}