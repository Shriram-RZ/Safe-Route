const mongoose = require('mongoose');

const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Safe Route Database Connected Successfully");
    }catch(e){
    console.log(`Database Not Connected. Error ${e}`);
    process.exit(1);
}
}


module.exports = {connection};