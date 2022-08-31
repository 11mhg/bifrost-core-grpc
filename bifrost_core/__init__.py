from .version import __version__

import grpc
import logging


from . import core_pb2
from . import core_pb2_grpc
from google.protobuf import wrappers_pb2
from google.protobuf.struct_pb2 import Struct



def run_execute(stub, code, variables = {}):

    inputData_message = core_pb2.InputData()
    inputData_message.code = code
    
    inputData_message.data.update(
        variables
    )
    
    out = stub.Execute(inputData_message)
    for o in out:
        print(o)



def run(target = 'localhost:50051'):
    with grpc.insecure_channel(target) as channel:
        stub = core_pb2_grpc.CoreJSStub(channel)

        vals = {
        'n': 35,
        'm': -128,
        'c': 7.6981928384058191820394,
        'f': True,
        'd': None,
        'e': "Hello!",
        'arr': list(range(20,30, 2)),
        'dict': {
            'n': 35,
            'm': 128,
            'c': 7.6981928384058191820394,
            'f': True,
            'd': None,
            'e': "Hello!",
            'arr': list(range(20,30, 2)),
            'dict': {
                    "n": 35
                }
            }
        }

        run_execute(
            stub, 
            code="""
console.log("Hello from js!");
        """,
            variables = vals
        )



run()