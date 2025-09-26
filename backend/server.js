require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db_connection = require('./Connection/db_connection.js')


const PORT = process.env.BACKEND_PORT;


const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json({message:"Server Running Successfully"});
})

const startServer = async ()=>{
    await db_connection.connection();
    app.listen(PORT,()=>{
    console.log(`Safe Route Backend is Running Successfully. On URL : http://localhost:${PORT}/`);
});
}

startServer();


