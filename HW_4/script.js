const cluster = require('cluster');
const process = require('process');

const factorial = (num) => {
    if( num == 1 || num == 0) return num;
    return num * factorial( num - 1);
}
if (cluster.isMaster) {
    const worker = cluster.fork();
    worker.on('listening', () => {
        worker.send('calculating');
        worker.disconnect();
    }); 
} else if (cluster.isWorker) {
    const net = require('net');
    const server = net.createServer().listen(8000);

    process.on('message', (msg) => {
        if (msg === 'calculating') console.log(factorial(50))
    });
}