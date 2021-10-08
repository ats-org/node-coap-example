const coap = require('coap');
const mp = require("@msgpack/msgpack");
const server = coap.createServer()

server.listen(() => {
    var req = coap.request({
        observe: false,
        host: 'localhost',
        pathname: '/',
        method: 'POST',
        confirmable: false,
        // options: {
        //     "Content-Format": 'application/json'
        // }  
    })  
    var payload = {
        username: 'aniu',
    }
    req.write(mp.encode(payload));
    req.end();
});