var customerModel=require('../model/customer')
var mongoose=require('mongoose')

//jun jun customer xan tini haru display garny
exports.fetchCustomer=function(req,res,next){
	customerModel.find({})// "select * from customer"
	.exec()
	.then((data)=>{
		res.status(200).json({
		'message':'success',
		'result':data
		})
	})
}

// api/customer/addcustomer

//customer ko registration
exports.addCustomer= function(req,res,next){

	var customer=new customerModel({
	_id:mongoose.Types.ObjectId(),
	customerid:req.body.customerId,
	customername:req.body.customerName,

})
customer.save()
.then(data=>{
res.json({
'message':'Customer Registered Successfully',
'result':data
})
})
.catch(err=>{
res.json(err)
})
}

exports.customerLogin=function(req,res,next){
	customerModel.find({customerid:req.body.customerId,customername:req.body.customerName})
	.then(customer=>{
		console.log(customer)
		if(customer.length<1){
			res.json({
				message:"All value are required"
			})
		}
		else{
			res.status(200).json(
				{
					'message':'success',
					'result':customer
				}
			)
		}
	})
	.catch(err=>{
		res.json({
			"Error message":err
		})
	})
}




