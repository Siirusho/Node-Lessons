const fs = require('fs');
const path = require('path');

try{
    let dataPath=path.join(__dirname, 'Data', 'addresses.csv');
    const data = fs.readFileSync(dataPath);
    let array = data.toString().split("\n");
    let json = JSON.stringify(array);
    console.log(json);
}catch(e){
    console.error(e);
}

function allFilesFolders(folder){
  if(!fs.lstatSync(folder).isDirectory() ) return;
  fs.readdirSync(folder).forEach(file => {
  console.log(file);
  let nestedPath=path.join(folder, file);
  allFilesFolders(nestedPath);
});
}
function print(folder){
  console.log(folder);
  allFilesFolders(folder);
}
console.log(print('node_modules'));