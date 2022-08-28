const { grpc, isAnyExtension } = require('./proto');
const protoLoader = require('@grpc/proto-loader');
const protobufjs = require('protobufjs');


function parse_value(any_obj)
{
    const type = any_obj['type_url'];
    const value = any_obj['value'];

    console.log(Object.getOwnPropertyNames(protoLoader));

    return any_obj;
}



function execute(call)
{
    const inputData = call.request;

    console.log(inputData);

    const code = inputData.code;
    var dataMessage = inputData.data;

    for (const key in dataMessage)
    {
        if (isAnyExtension(dataMessage[key]))
        {
            dataMessage[key] = parse_value(dataMessage[key]);
        }
    }

    var outputData = {
        stdout: "",
        stderr: "",
        data: {
            done: true
        }
    };

    for (let i=0; i < 10; i++)
    {
        call.write(
            outputData
        );
    }
    call.end();
}


module.exports = {
    Execute: execute
};