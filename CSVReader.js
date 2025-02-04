/*
    Author: Gabriel Szopinski
    Filename: CSVReader.js
    Description: This file contains an object called CSVReader which takes a filename
    string and will give the data of that csv file as a 2D array with data split apart
    and parsed as it normally would in say a language like python. 
*/


// version 1.0
//imported library required to open files
import * as fs from "fs";
//start of class
export class CSVReader {
    //holds data of csv in 2D format
    csvArray = [[]];
    /*
        Function Name: constructor
        Arguments: String/char array filename, boolean headers
        Return Type: 2D Array Data conglomerate
        Description: constructor will take in a filename as a string and headers
        (not implemented yet) as a boolean these two arguments will determine how
        the data will be parsed the filename and headers are placed in their own
        instance variables and transform method is called
    */
    constructor(filename, headers=true) {
        this.filename = filename;
        this.headers = headers;
        return this.transform();
    }
    /*
        Function Name: gatherBuffer
        Arguments: None
        Return Type: String or character array
        Description: gatherBuffer will open a file and based on the instance variable 
        "filename" and will return the data that is gathered based on "utf-8" encoding
    */
    gatherBuffer() {
        const data = fs.readFileSync(this.filename, "utf-8");
        return data;
    }
    /* 
        Function Name: transform
        Arguments: None
        Return type: 2D Array Data conglomerate
        Description: transform parses the buffer that is recieved from gatherbuffer
        the method also looks for special characters that are unique to csv files such
        as ',' and '\n' characters the buffer is separated based on these characters
    */
    transform() {
        this.buffer = this.gatherBuffer();
        this.item = "";//used to create new strings for data parsing
        this.row = 0;//keep track of what row to place the item data
        this.inQuotes = 0
        for (var i = 0; i != this.buffer.length; ++i) {//iterate through buffer
            //new row we need to skip
            console.log(this.buffer[i])
            if (this.buffer[i] == '\n') {//special char
                this.csvArray[this.row].push(this.item);//push item
                this.csvArray.push([]);//add a new row
                this.item = "";//end item
                this.row++;//end row
            }
            //end of item need to start a new item
            else if (this.buffer[i] == ',' && this.inQuotes != 1) {//special char
                this.csvArray[this.row].push(this.item);//add item
                this.item = "";//end item
            }
            //data that is in quotes will now keep its commas and string together
            else if (this.buffer[i] == "'" || this.buffer[i] == '"') {
                this.inQuotes == 0 ? this.inQuotes = 1 : this.inQuotes = 0
            }
            else {//add to item with new data
                this.item += this.buffer[i];
            }
        }
        //housekeeping finish off the 2D array with the last item
        this.csvArray[this.row].push(this.item);
        return this.csvArray;
    }
}
