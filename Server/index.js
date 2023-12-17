import express from 'express';
import bodyParser from 'body-parser';
import {Server} from 'socket.io'


const app=express();
const io= new Server();
app.use(bodyParser.json());


io.on('connection',(socket)=>{

})




app.listen(8000,()=>{
    console.log(`Server is running at Port 8000`)
})