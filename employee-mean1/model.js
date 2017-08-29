var mongoose = require('mongoose');
var empSchema= new mongoose.Schema({
    name:String,
    position:String,
    department:String,
    salary:String
});

var Employee = module.exports=mongoose.model('employee',empSchema);

module.exports.getEmployees = function(callback){
    console.log("raghu Nayudu");
    
     Employee.find({},callback);
}
