// Require dependencies
const coap = require('coap');
const mp = require("@msgpack/msgpack");

// Set global variables
let server;
let port = 5683;

// Initialize the server
function init() {
    // Create the CoAP server and set it to the server variable
    server = coap.createServer();

    // Tell the Server to listen on defined port
    server.listen(port, () => {
        const m = [{status: 'COAP running at port: ' + `${port}`}];
        console.log(m);
    });

    // When a request comes in do logic
    server.on('request', (req) => {
        try {
            // Attempt to decode the payload with Messagepack
            let parsed = mp.decode(req.payload);
            // Log parsed data to the console
            console.log('parsed', parsed);
        } catch (error) {
            // Log Error if not able to decode payload
            console.error(error);
        }
    });
}

init();
