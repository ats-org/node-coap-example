// REquire dependencies
const coap = require('coap');
const mp = require("@msgpack/msgpack");

// Set global variables
const server = coap.createServer()

// send server request
server.listen(() => {
    // form CoAP request 
    let req = coap.request({
        observe: false,
        host: 'localhost',
        pathname: '/',
        method: 'POST',
        confirmable: false,
        // options: {
        //     "Content-Format": 'application/json'
        // }  
    });

    // Define exampel payload
    let payload = {
        username: 'aniu',
    }

    // Encode payload with messagepack and send the request
    req.write(mp.encode(payload));
    req.end();
});