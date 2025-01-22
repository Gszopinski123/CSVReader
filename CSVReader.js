

export class CSVReader {
    csvArray = [[]]
    constructor(buffer, headers=true) {
        this.buffer = buffer;
        this.headers = headers;
        this.transform()
    }
    transform() {
        console.log("Transforming!");
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
        console.log(this.csvArray)
    }
}
