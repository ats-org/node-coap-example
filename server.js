const coap = require('coap');
const mp = require("@msgpack/msgpack");
let server;
let port = 5683;
function init() {
    server = coap.createServer();
    server.listen(port, () => {
        const m = [{status: 'COAP running at port: ' + `${port}`}];
        console.log(m);
    });
    server.on('request', (req) => {
        try {
            let parsed = mp.decode(req.payload);
            console.log('parsed', parsed);
        } catch (error) {
            console.error(error);
        }
    });
}

init();
