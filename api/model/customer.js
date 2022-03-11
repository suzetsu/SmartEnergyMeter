var mongoose=require('mongoose')
require('dotenv').config()
var dburl=process.env.MONGO_DB_URL
mongoose.connect(dburl,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true })
.then(()=>console.log("connection successfull")
)
var conn=mongoose.Collection;
var customerSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    customerid:{
        type:Number,
        required:true,
        index:{
            unique:true
        }
    },
    customername:{
        type:String,
        required:true,
    }
    ,
    is_authorised:{
        type:Boolean,
        required:false,
        default:false
     
    }

})
var customerModel=mongoose.model('customers',customerSchema)
module.exports=customerModel