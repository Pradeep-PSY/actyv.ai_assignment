const {Router} = require('express');
const userModel = require('../model/user.Model');

const registerController = Router();


registerController.post('/user', async (req, res) => {
const {name, email, password, phone} = req.body;
let valid = await userModel.findOne({email,phone})
if(valid){
    return res.send('user already registered')
}
else{

    const new_user = new userModel({name, email, password, phone}) 
    await new_user.save();
    return res.send('user added successfully');
}


})


registerController.get('/all', async (req, res) =>  {
    const allUser = await  userModel.find({});
    res.send(allUser)
})

module.exports = registerController;