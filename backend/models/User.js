const mongoose = require('mongoose');
//bcrypt is a Library for securely hashing passwords and comparing them.
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
    {
        fullName:{ type: String, required: true},
        email:{type: String, required:true},
        password:{ type:String, required:true},
        profileImageUrl:{type:String,default:null},
    },
    {timestamps:true} //automatically add timestaps such as createdat and updatedat
)

//Hash password before saving
UserSchema.pre('save',async function (next){
    //this refers to the current instance of document
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

//compare passwords ,Adds a custom method to the user schema called comparePassword.
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword,this.password);
}

module.exports = mongoose.model("User",UserSchema);