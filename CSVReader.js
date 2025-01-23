//version 1.0
import * as fs from "fs"
export class CSVReader {
    csvArray = [[]]
    constructor(filename, headers=true) {
        this.filename = filename
        this.headers = headers;
        return this.transform()
        
    }
    gatherBuffer() {
        this.buffer = ""
        const data = fs.readFileSync(this.filename, "utf-8");
        return data
    }
    transform() {
        console.log("Transforming!");
        this.buffer = this.gatherBuffer();
        this.item = ""
        this.row = 0
        for (var i = 0; i != this.buffer.length; ++i) {
            //new row we need to skip
            if (this.buffer[i] == '\n') {
                this.csvArray[this.row].push(this.item);
                this.csvArray.push([]);
                this.item = "";
                this.row++;
            }
            //end of item need to start a new item
            else if (this.buffer[i] == ',') {
                this.csvArray[this.row].push(this.item);
                this.item = ""
            }
            else {
                this.item += this.buffer[i];
            }
        }
        this.csvArray[this.row].push(this.item);
        return this.csvArray
    }
}
