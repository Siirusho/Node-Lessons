import {Request, Response} from 'express'
import fs from 'fs'

export const fileReader = (req:Request, res:Response):void => {
    const fileContents = fs.createReadStream('./DataToJson/data1.txt');
    fileContents.on('data', (chunk:any):void=>{
        const dataToJSON = JSON.stringify(chunk.toString());
        res.send(dataToJSON);
    })
}