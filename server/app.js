const express = require('express');
const socket = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use('/', (req, res) => {
    res.send('App Started');
})


const server = app.listen(3000, () => console.log('App Started on Port 3000'));

const io = socket(server);

io.sockets.on('connection', (data) => {
    console.log('New Connection id : ' + data.id);
    sendData(data);
})

let x = true;

function sendData(data) {
    if (x) {
        data.emit('data1', Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10));
        x = !x;
    } else {
        data.emit('data2', Array.from({ length: 8 }, () => Math.floor(Math.random() * 460) + 10));
        x = !x;
    }

    setTimeout(() => {
        sendData(data);
    }, 3000);
}