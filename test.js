//special imports
import CSVReader from Reader.js
//start of buffer how data should look when importing a file
var buffer = "row1,row2,row2\nGabriel,Szopinski,21";
var myReader = CSVReader(buffer)
//testing
console.log(buffer);