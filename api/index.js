var express=require ('express')
var app = express();
const port=5000
var path=require('path')
var bodyParser=require('body-parser')
/*creating Api*/
var customerapi=require('./routes/customer')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();

  });
app.use('/api/customer',customerapi)
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
module.exports = app;