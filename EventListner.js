var fs=require('fs');
var events=require('events');
function errorEvaluation(err,data){
	if(err){
		console.log("Error Has Occured please try to Check"+err);
		return;
	}
	else{
		console.log(data.toString());
	}
}

fs.readFile('test.html',errorEvaluation);
var eventEmitter=new events.EventEmitter();
//Listner 1 
var Listner1= function(){
	setTimeout(()=>{
		console.log('hello world');
	},2000)
	console.log('Listner1 Got Exceuted');
	
}

var Listner2 = function(){
	console.log('Listner2 Got Exceuted');
}
// when a event connection is emmited then eventHandler Listner1 gets Exceuted 
eventEmitter.addListener('connection',Listner1);
eventEmitter.addListener('connection',Listner2);
var listeners= require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(listeners);
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',Listner1);
eventEmitter.emit('connection');