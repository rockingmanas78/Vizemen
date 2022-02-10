const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
        name:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        instaURL:{
            type:String,
            default:"",
        },
        linkedInURL:{
            type:String,
            default:"",
        },
        facebookURL:{
            type:String,
            default:"",
        },
        profilePic:{
            type:String,
            default:"",
        },
        roles:{
            type:Array,
            required:true
        },
    },
);

module.exports = mongoose.model("User", UserSchema);