var mysql= require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Chamak@123"
});
con.connect(function(err){
    if(err){
        throw err;
    }
    else
        {
            console.log("connected to Database");
            con.query('CREATE DATABASE EMPLOYEE',function(err,result){
                if(err) throw err;
                else
                    console.log(result);    
            })
        }
})