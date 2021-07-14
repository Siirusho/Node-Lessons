const events = require('events');
const EventEmitter = events.EventEmitter;
const myEvent = new EventEmitter();

const user = [];
const msg = [];
const argv = require('minimist')(process.argv.slice(2));
let userFromTerminal = argv.addUser;
let messageFromTerminal = argv.message;

function addingMessageInMsg(ms) {
    msg.push(ms)
}
myEvent.on('message', addingMessageInMsg);
myEvent.emit('message', messageFromTerminal)

function addingUserInUser(us) {
    user.push(us)
}
myEvent.on('user', addingUserInUser);
myEvent.emit('user', userFromTerminal)
console.log(user);
console.log(msg);
console.log(argv);
// node response.js  --addUser "Marsel"  --message "Welcome"
