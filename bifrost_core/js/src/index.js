const args = require('./argparser');
const proto = require('./proto');
const core = require('./core');

function main()
{
    const bindport = args.bind + ':' + args.port;
    console.log("bindport: ", bindport);

    const server = proto.getServer(
        core
    );

    server.bindAsync(bindport, proto.grpc.ServerCredentials.createInsecure(), ()=>{
        server.start();
    });
};


main();