const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');
const schema = mongoose.Schema;


const userSchema = new schema({
  firstName:{type:String , required:true},
  lastName:{type:String , required:true},
  email:{type:String , required:true ,unique : true},
  tempPassword:{type:String , required:true},
  password:{type:String , required:true},
  userStatus:{type:Number , required:true}
})

// Hash password before saving the user
//This code is a pre-save hook for a Mongoose schema, which means it runs before a user is saved to the database
userSchema.pre('save', async function (next) {
  //Check if Password is Modified
  if(!this.isModified('password')) return next();
  //salt generate
  const salt = await bcrypt.genSalt(10);
  //Hash the Password:
  this.password = await bcrypt.hash(this.password, salt)
  //Proceed to Save
  next();
});
//This code is a method to compare a user-entered password with the hashed password stored in the database.
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);

}


module.exports = mongoose.model('User' , userSchema)