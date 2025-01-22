
import * as fs from "fs"
export class CSVReader {
    csvArray = [[]]
    buffer = "";
    constructor(filename, headers=true) {
        this.filename = filename
        this.headers = headers;
        this.transform()
        //console.log(this.buffer);
    }
    async transform() {
        console.log("Transforming!");
        this.buffer = await fs.readFile(this.filename, (err, data) => {
            if (err) {
                console.log(err);
                console.log("Not passed!");
            } else {
                console.log("Passed!");
                for (var i = 0; i != data.length; i++) {
                    this.buffer = this.buffer + String.fromCharCode(data[i]);
                }
            }
            console.log(this.buffer);
            return this.buffer;
        });
        // this.item = ""
        // this.row = 0
        // for (var i = 0; i != this.buffer.length; ++i) {
        //     //new row we need to skip
        //     if (this.buffer[i] == '\n') {
        //         this.csvArray[this.row].push(this.item);
        //         this.csvArray.push([]);
        //         this.item = "";
        //         this.row++;
        //     }
        //     //end of item need to start a new item
        //     else if (this.buffer[i] == ',') {
        //         this.csvArray[this.row].push(this.item);
        //         this.item = ""
        //     }
        //     else {
        //         this.item += this.buffer[i];
        //     }
        // }
        // this.csvArray[this.row].push(this.item);
        // console.log(this.csvArray)
    }
}
