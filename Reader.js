

class CSVReader {
    constructor(buffer, headers=true) {
        this.buffer = buffer;
        this.headers = headers;
        this.transform()
    }
    transform() {
        console.log("Created!")
    }
}

