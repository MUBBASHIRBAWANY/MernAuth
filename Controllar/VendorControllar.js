import vendorModal from "../Models/vendorModels.js"





export const getAllVendors = (req,res) =>{
    vendorModal.find({}).then((vendor)=>{
        res.send(vendor)
    })
}

export const postVendor = async (req,res) =>{
    try{
        const newVendor = new vendorModal(req.body)
        const {Vendor_Address, CareOf , Vendor_Name , Vendor_City , Vendor_Contact_No} = newVendor
        await vendorModal.create(newVendor)
        res.send(newVendor)
    }catch(err){
        res.send(err)
    }
}

export const UpdateVendor = async (req,res) =>{
    try{
        const vendor = await vendorModal.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(vendor)
    }catch(err){
        res.send(err)
    }
}


export const getVendorByid = async (req,res) => {


    try{
        const vendor = await vendorModal.findById(req.params.id)
        res.send(vendor)
    }catch(err){
        res.send(err)
    }
}

export const deleteVendor = async (req,res) =>{
    try{
        const vendor = await vendorModal.findByIdAndDelete(req.params.id)
        res.send(vendor)
    }catch(err){
        res.send(err)
    }
}