const fs = require('fs');
const path = require('path');
const readline = require('readline');

//1.Read file content. File path should be provided via readline.
function readFileViaReadline(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Which  file do you want to read ', (fileName) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) console.log('err', err);
        console.log(data);
        rl.close();
    })
  });
}
//readFileViaReadline()

//2.Convert attached .csv file to .json file
function convert(dataPath){
    try{
        const data = fs.readFileSync(dataPath);
        let array = data.toString()
        let json = JSON.stringify(array);
        return json;
    }catch(e){
        console.error(e);
    }
}
dataPath=path.join(__dirname, 'Data', 'addresses.csv')
//console.log(convert(dataPath))

//3.Print attached directory structure
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
// console.log(print('node_modules'));