const DBUser = require('../../models/UserModel');//export from model 
const {passwordGeneratorService } = require('../../utils/passwordgenerator')
 
 const  createUser = async(req,res)=>{
  try{
    const {firstName,lastName,email} = req.body

    const existUser = await DBUser.findOne({
      email,
      userStatus: { $nin: [-1] }
    });
    
    if (existUser) {
      console.error('User with provided email already exists', { email });
      return res.status(409).json({
        success: false,
        message: 'Profile with this email already exists'
      });
    }

    const tempPassword = await passwordGeneratorService();

    const profileData = {
    email,
    firstName,
    lastName,
    //fullName: `${firstName} ${lastName}`,
    userStatus:1,
    tempPassword,
    password:tempPassword,
    }
    await DBUser.create(profileData);

    // Send success response after user creation
    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: profileData
    });
  }catch(error){
    console.error("Error in creating user : ",error);

    // Send error response to client
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

module.exports=createUser;