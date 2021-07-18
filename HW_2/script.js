const events = require('events');
const EventEmitter = events.EventEmitter;
const myEvent = new EventEmitter();

const user = [];
const msg = [];
const argv = require('minimist')(process.argv.slice(2));
let userFromTerminal = argv.addUser;
let messageFromTerminal = argv.message;

function addingUserInUser(us) {
    user.push(us);
}
function addingMessageInMsg(ms) {
    msg.push(ms);
}

myEvent.on('user', addingUserInUser);
myEvent.on('message', addingMessageInMsg);

myEvent.emit('user', userFromTerminal);
myEvent.emit('message', messageFromTerminal);


// node script.js  --addUser "Marsel"  --message "Welcome"
