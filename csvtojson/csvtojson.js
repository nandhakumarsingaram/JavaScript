var fs = require('fs');

var data = [];
var fileContents = fs.readFileSync('csvfile.csv');
var lines = fileContents.toString().split('\n');

for (var i = 0; i < lines.length; i++) { //line.length refers to rows length
    data.push(lines[i].toString().split(','));
}

for (var i = 0; i < lines.length; i++) {
	//let string ="";
    for (var j = 0; j < 10; j++) { // here 10 refers to columns length
        console.log(data[i][j]);
        /* To print in the same line as string 
        //string+=people[i][j];
        //string+=' '; */
    }
    //console.log(string);
    console.log('\n');
}

// To print as JSON format
console.log(JSON.stringify(data));