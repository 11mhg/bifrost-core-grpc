const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.resolve( __dirname + '/../../protos/core.proto' );

const protoDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        enums: String,
        json: true,
    }
);

const protoDescriptor = grpc.loadPackageDefinition( protoDefinition );

function getServer(functionDefs)
{

    const CoreJS = protoDescriptor.CoreJS;
    const server = new grpc.Server();
    server.addService(
        CoreJS.service,
        functionDefs
    );

    return server;
}


module.exports = {
    grpc: grpc,
    protoDescriptor: protoDescriptor,
    getServer: getServer
};