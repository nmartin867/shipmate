var io = require('socket.io');

module.exports = Messanger;


function Messanger(express) {
    if (express) {
        var socket = io.listen(express, { log: false });
        socket.on('connection', function (client) {
          console.log('connection');
        });
    } else {
        console.log.error('Messanger was not handed a reference to express application.')
        return null;
    }
};
