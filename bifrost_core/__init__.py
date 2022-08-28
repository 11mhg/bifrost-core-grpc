from .version import __version__

import grpc
import logging


from . import core_pb2
from . import core_pb2_grpc
from google.protobuf import wrappers_pb2
from google.protobuf.any_pb2 import Any


def run_execute(stub, code, variables = {}):

    inputData_message = core_pb2.InputData()
    inputData_message.code = code
        
    data_message = {}
    for key, value in variables.items():
        if isinstance(value, bool):
            data_message[key] = wrappers_pb2.BoolValue()
            data_message[key].value = value
        elif isinstance(value, int):
            data_message[key] = wrappers_pb2.Int64Value()
            data_message[key].value = value
        elif isinstance(value, float):
            data_message[key] = wrappers_pb2.DoubleValue()
            data_message[key].value = value
        elif isinstance(value, str):
            data_message[key] = wrappers_pb2.StringValue()
            data_message[key].value = value

    for key, value in data_message.items():
        inputData_message.data[key].Pack(value)
    
    out = stub.Execute(inputData_message)
    for o in out:
        print(o)



def run(target = 'localhost:50051'):
    with grpc.insecure_channel(target) as channel:
        stub = core_pb2_grpc.CoreJSStub(channel)

        print()

        run_execute(
            stub, 
            code="""
console.log("Hello from js!");
        """,
            variables = {"starting": True}
        )



run()