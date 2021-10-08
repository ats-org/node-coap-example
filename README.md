# Nodejs CoAP/Messagepack client server example

This is a very simple CoAP messagepack client server example

There are two files in this project
```
client.js
```
This sends a dummy example via coap encoded with messagepack to the CoAP server that is running with the second file
```
server.js
```

### Requirements
nodejs 12+

## Getting started

Install the dependencies
```
npm i
```

Start the coap server
```
node server.js
```

This starts the CoAP server on port 5683

You can then open an additional terminal 
and run the client.js file to send a dummy packet to the server to see the output.

```
node client.js
```
