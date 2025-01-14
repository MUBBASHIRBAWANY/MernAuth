import multer from 'multer';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';


dotenv.config();





cloudinary.config({ 
    cloud_name: process.env.cloudName, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:(req,file)=> {
        let folder = "uploads/userImage"     
        return {folder};
      
    },
    allowedFormats: ['jpg', 'png', 'jpeg']
  });


const uploads = multer({ storage });

export default uploads;
