function sub () {
	// body...
	var user = document.getElementById('userName').value;
	var pass = parseInt(document.getElementById('passWord').value);

	var database = [["mir sahib",1234],["asif mahmud",5678],["safat kamran",9874]];
	var counter=0;
	var index=0;
	for (var i = 0; i < database.length; i++) {
		if(database[i][0]==user && database[i][1]==pass){
			counter++;
			index=i;
			break;
		}
	}
	if(counter==1){
		alert("Welcome "+ database[index][0]);
	}else{
		alert("Incorrect userName and password")
	}

}

function can (argument) {
	// body...
	var user = document.getElementById('userName');
	var pass = document.getElementById("passWord");
	user.value = "";
	pass.value = "";
}