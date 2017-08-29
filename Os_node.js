const os= require('os');
var x=0;
setTimeout(()=>{console.log('Server 2 Is Offline');},3000);
 var interval=setInterval(()=>{
console.log('hello World These are Os_configurations');
console.log(__dirname,__filename);
console.log("os.freemem():\n",os.freemem());
x++;
setTimeout(()=>{if(x==10){
	console.log('Time For Exiting from the loop');
	clearInterval(interval);}})
},2000);
