var fs=require('fs');
function errorEvaluation(err,data){
	if(err){
		console.log("Error Has Occured please try to Check"+err);
		return;
	}
	else{
		console.log(data);
	}
}

fs.readFile('test.html',errorEvaluation);

	
