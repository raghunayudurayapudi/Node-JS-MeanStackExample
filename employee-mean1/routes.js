var express= require('express');
var router= express.Router();
var Employee= require('./model');
router.get('/',function(req,res){
    Employee.getEmployees(function(error,employees){
        if(error) throw error;
        res.json(employees);
    })
    res.send('hello from the router..');
});
module.exports=router;
