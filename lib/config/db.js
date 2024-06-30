import mongoose from "mongoose"

export const ConnectDB = async () =>{
   await mongoose.connect('mongodb+srv://aakashpodar:aakashpodar234@cluster0.zgbcvcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

   console.log("DB Connected");
}
