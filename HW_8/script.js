// Create docker image with simple express application using.
// Image should be inherited from ubuntu20.04. Other packages needs to be installed in dockerfile
// Add port binding and volume mounting. Add nodemon as well for development purpose.
// The mentioned above should be in docker-compose alongside with database(MySQL).
// Mentioned containers should be connected with network.
// If there are other scripts/commands that you used. please add them as script files.
const express = require('express');
const app = express();
const port = 300;

app.get('/', (req, res) => {
    res.send('Hello!')
    })
    
app.listen(port)