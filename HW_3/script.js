const fs = require('fs');
const path = require('path');

try{
    let dataPath=path.join(__dirname, 'Data', 'addresses.csv');
    const data = fs.readFileSync(dataPath);
    var array = data.toString().split("\n");
    let json = JSON.stringify(array);
    console.log(json);
}catch(e){
    console.error(e);
}

