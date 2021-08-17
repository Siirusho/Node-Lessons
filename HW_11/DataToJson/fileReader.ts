const fs = require('fs');

function readFile(file){
    const fileContents = fs.createReadStream(file);
    const writeStream = fs.createWriteStream(`./${file.slice(0,-4)}.json`);
    fileContents.on('data', (chunk)=>{
        const dataToJSON = JSON.stringify(chunk.toString());
        writeStream.write(`${dataToJSON}`);
    })
}
readFile("./DataToJson/data1.txt")