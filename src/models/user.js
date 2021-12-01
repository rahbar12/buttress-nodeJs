const mongoose=require("mongoose");

const registerSchema=new mongoose.Schema({
    firstname:{
        type:String,
        default:""
    },
    lastname:{
        type:String,
        default:""
    },
    mobile:{
        type:String,
        unique:false,
        default:""
    },
    email:{
        type:String,
        unique:false,
        default:""
    },
    password:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:""
    },
    xabn:{
        type:String,
        default:""
    },
    xqualifications:{
        type:String,
        default:""
    },
    xwhitecard:{
        type:String,
        default:""
    },
    xsafetyrating:{
        type:String,
        default:""
    },
    profilestatus:{
        type:Boolean,
        default:false
    },
    status:{
        type:Boolean,
        default:true
    },
    status:{
        type:Boolean,
        default:true
    },
    blocked :{
        type:Boolean,
        default:false
    },
    otp:{
        type:String,
        default:""
    },
    token:{
        type:String,
        default:""
    },
    tempmobile:{
        type:String,
        default:""
    }
},{versionKey:false,timestamps:true});

let registerUsers=new mongoose.model("user",registerSchema);

module.exports=registerUsers;