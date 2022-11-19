const express  = require('express');
const connection = require('./config/db');
const registerController = require('./controller/userController');
const cors = require('cors');
const app = express();

 
app.use(express.json());
app.use(cors())

app.get('/', (req,res)=>{
 res.send('welcome to actyv.ai form_assignment')
});

app.use('/register',registerController);
app.listen(8000,async ()=>{
    try{
        await connection 
        console.log('db is connected');
    }
    catch(err){
        console.log(err)
    }
    console.log('server is started at port 8000')
})