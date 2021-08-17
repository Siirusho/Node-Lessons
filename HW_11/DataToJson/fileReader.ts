const fs = require('fs');
const path = require('path');

function copyFile( source, target ) {
    let targetFile;
    if ( fs.existsSync( target ) &&  fs.lstatSync( target ).isDirectory()) {
        targetFile = path.join( target, path.basename( source ) );
    }
    const fileContents = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(`./${targetFile.slice(0,-4)}.json`);
    fileContents.on('data', (chunk)=>{
        const dataToJSON= JSON.parse(chunk.toString())
        writeStream.write(`${dataToJSON}`)
    })
}

function copyFolderRecursive( source, target ) {
    let targetFolder = path.join( target, path.basename( source ) );
    if ( !fs.existsSync( targetFolder )) {
        fs.mkdir( targetFolder, (err) => {
            if (err) console.log(err);
        });
    }
    
    if ( fs.lstatSync( source ).isDirectory() ) {
        fs.readdir( source, (err, folder)=>{
          if(err) console.log(err)
            folder.forEach( file => {
                const curSource = path.join( source, file );
                if ( fs.lstatSync( curSource ).isDirectory() ) {
                    copyFolderRecursive( curSource, targetFolder );
                } else {
                    copyFile( curSource, targetFolder );
                }
            });
        });
      
    }
} 
copyFolderRecursive("./DataToJson/Data", "./DataToJson/CloneData")
