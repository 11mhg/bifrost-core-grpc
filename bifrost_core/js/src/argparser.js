const { ArgumentParser } = require('argparse');



const parser = new ArgumentParser({
    description: 'Starts the bifrost core grpc js engine.', 
    add_help: true
});

parser.add_argument(
    '--port',
    { 
        dest: 'port', 
        type: 'str',
        default: '50051',
        help: 'The port on which the grpc server will listen.' 
    }
);

parser.add_argument(
    '--bind',
    { 
        dest: 'bind', 
        type: 'str',
        default: '0.0.0.0',
        help: 'The url on which the grpc server will bind.' 
    }
);

const args = parser.parse_args()


Object.assign(
    module.exports,
    args
);