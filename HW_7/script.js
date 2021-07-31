const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/countries', (req, res)=>{
  fs.readFile('./data.json', 'utf-8', (err, countries)=>{
    if(err) console.log(err);
    res.send(countries);
  });
})

app.post('/countries', (req, res)=>{
  fs.writeFile('./data.json', JSON.stringify(req.body, undefined, 2), 'utf8', err =>{
    if(err) console.log(err);
    res.send('received');
  });
})

app.patch('/countries', (req, res)=>{
  fs.writeFile('./data.json', JSON.stringify(req.body, undefined, 2), 'utf8', err =>{
    if(err) console.log(err);
      res.send('changed');
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

