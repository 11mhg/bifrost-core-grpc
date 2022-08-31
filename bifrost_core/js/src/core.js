const { grpc } = require('./proto');
const protoLoader = require('@grpc/proto-loader');
const protobufjs = require('protobufjs');
const { parseStruct, getValueFromObj, parseListValue } = require('./parsers');
const vm = require('node:vm');

var context = global;
vm.createContext(context);

function execute(call)
{
    const inputData = call.request;
    const code = inputData.code;
    {
        var dataMessage = inputData.data.fields;
        var data = parseStruct(dataMessage);
        for (let prop in data)
        {
            context[prop] = data[prop];
        }
    }

    console.log(code);
    vm.runInContext("console.log('hello!')", context);

    //console.log(data);


    call.end();
}


module.exports = {
    Execute: execute
};