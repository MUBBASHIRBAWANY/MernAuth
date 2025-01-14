import TotalProductModal from "../Models/TotalProductModal.js";


export const AddProductQty = async (req, res) => {
    try {
        const data = req.body.products;
      
        // Map the products to calculate total quantities
        const TotalProducts = data.map((item) => ({
          ProductName: item.productName,
          IncrementQuantity: item.value * parseFloat(item.name), // Calculate increment value
        }));
      
        // Prepare bulk operations
        const bulkOps = TotalProducts.map((product) => ({
          updateOne: {
            filter: { ProductName: product.ProductName }, // Find product by ProductName
            update: {
              $inc: { TotalQuantity: product.IncrementQuantity }, // Increment TotalQuantity
            },
            upsert: true, // Create new document if not found
          },
        }));
      
        // Execute bulk write
        const result = await TotalProductModal.bulkWrite(bulkOps);
      
       res.send("Bulk update or insert result");
      } catch (error) {
        console.error("Error processing products:", error);
      }  
    
}

export const AllProductQty = async (req,res) =>{
    try{
        const data = await TotalProductModal.find({})
        res.send(data)
    }catch(err){
        res.send(err)
    }
}

