var buffer=new Buffer(26);
for(let i=0;i<buffer.length;i++){
	buffer[i]=i+97;
}
console.log(buffer.toString('ascii'));
console.log(buffer.toString('ascii',0,5));
console.log(buffer.write('helloworld'));
console.log(buffer.toJSON());

var buffer1=new Buffer('Raghu');
var buffer2=new Buffer('Nayudu');
var buffer3=Buffer.concat([buffer1,buffer2]);

console.log(buffer3.toString('ascii'));
console.log(buffer1.compare(buffer2));
