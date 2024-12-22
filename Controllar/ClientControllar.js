import clientModal from "../Models/clientModal.js"

export const getAllClient = (req,res) =>{
    clientModal.find({}).then((client)=>{
        res.send(client)
    })
}

export const postClient = async (req,res) =>{
    try{
        const newclient = new clientModal(req.body)
        await clientModal.create(newclient)
        res.send(newclient)
    }catch(err){
        res.send(err)
    }
}

export const UpdateClient = async (req,res) =>{
    try{
        const client = await clientModal.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(client)
    }catch(err){
        res.send(err)
    }
}


export const getClientByid = async (req,res) => {


    try{
        const client = await clientModal.findById(req.params.id)
        res.send(client)
    }catch(err){
        res.send(err)
    }
}

export const deleteClient = async (req,res) =>{
    try{
        const client = await clientModal.findByIdAndDelete(req.params.id)
        res.send(client)
    }catch(err){
        res.send(err)
    }
}