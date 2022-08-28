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

function isAnyExtension(obj)
{
    return ('type_url' in obj) && (typeof (obj)['type_url'] === 'string');
}



module.exports = {
    grpc: grpc,
    protoDescriptor: protoDescriptor,
    getServer: getServer,
    isAnyExtension: isAnyExtension,
};