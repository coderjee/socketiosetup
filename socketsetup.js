/* Module needs to require. */
const socket = require('socket.io');

/**
 * Function to setup socket which takes server as an argument which is instance of http server.
 * @param {Objecte} server: http Server 
 */
function socketSetup(server) {
    /** Connected socket io instance use this instance to create namespance for this socket instance.  */
    const io = socket(server);
    io.on('connection', (client) => {

        client.on('connection', (data) => { /* … */
            console.log('event connection done')
        });

        client.on('chatting', (data) => { /* … */
            emitMessage(data);
        });
        client.on('message', (data) => {
            console.log(message);
        })
    });

    function emitMessage(data) {
        io.emit('chatting', data);
    };
}
module.exports = socketSetup;