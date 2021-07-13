const myEvent = require('events');
const logger = new myEvent();
const CLI = new myEvent();
const users = [];
const msgs = [];

logger.on('message', (msg)=>{
    console.log('new message', msg);
    msgs.push(msg);
})

logger.on('login', (name)=>{
    console.log('new user', name);
    users.push(name);
})

logger.on('getUsers', () => {
    console.log('Logged user', ...users);
} )

logger.on('getMessage', () => {
    console.log('Messages', ...msgs);
})

CLI.on('AddUser', (name) => {
    console.log('Hire User Name');
    users.push(name);
})
CLI.on('Message', (msg)=>{
    console.log('Hire User Messsage');
    msgs.push(msg);
})

logger.emit('message', 'Hello world!');
logger.emit('login', 'Bob');
logger.emit('getUsers');
logger.emit('getMessage');
CLI.emit('AddUser', 'Max');
CLI.emit('Message', 'Hi!');



