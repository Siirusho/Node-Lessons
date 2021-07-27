// Տնային աշխատանք, որը պետք է անել Streams-ով
// Ստեղծել ծրագիր, որը դրսից (argv) ստանում է ինչ որ թղթապանակի (folder) հասցե
// Այդ թղթապանակին հարակից ստեղծում է պատահական անունով թղթապանակ
// Առաջին թղթապանակում գտնվող բոլոր ֆայլերը zip է անում և zip արված ֆայլերը տեղադրում է նոր ստեղծված թղթապանակում

const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const folderPath = argv.folderPath;
const path = require('path');
const gzip = require('zlib')

function cloneFolder(){
    fs.mkdir(path.join(path.dirname(folderPath), './clonedFolder'), (err) => {
        if (err) console.log(err);
        console.log('Directory created!');
    });
    fs.readdir('./Data', (err, folder) => {
        if (err) console.log(err)
        folder.forEach(fileName => {
            const fileContents = fs.createReadStream(`./Data/${fileName}`);
            const writeStream = fs.createWriteStream(`./clonedFolder/${fileName.slice(0,-4)}.gzip`);
            fileContents.pipe(gzip.createGzip()).pipe(writeStream);
        })
    })
}
if(fs.existsSync('./clonedFolder')) {
    console.log('Directory already exists')
} else cloneFolder()

