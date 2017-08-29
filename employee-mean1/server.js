var express= require('express');
var bodyparser= require('body-parser');
var mongoose= require('mongoose');
var app = express();
var port = 3000;
var config='mongodb://localhost:27017/coustomersdb';
 mongoose.connect(config).connection
 .on('connected',function(){console.log('connected to mongoDB')})
 .on('error',function(){console.log('some error'+error)});
 
app.get('/',function(req,res){
    res.send('Hello Connection made was sucessful');
});
//iam going to create a middle ware
var router=require('./routes');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/api/employees',router);
app.listen(port,function(){
    console.log('Server is running on port 3000');
});
//////
// var mysql= require('mysql');
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Chamak@123"
// });
// con.connect(function(err){
//     if(err){
//         throw err;
//     }
//     else
//         {
//             console.log("connected to Database");
//             con.query('use employee',function(err,result){if(err) throw err;
//                 else console.log('using Database Employee');
//             });
//             con.query('select * from persons',function(err,result){
//                 if(err) throw err;
//                 else
//                     console.log(result);
//                     result.send
//             })
//         }
// })