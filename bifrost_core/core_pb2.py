# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: core.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\ncore.proto\x1a\x1cgoogle/protobuf/struct.proto\"@\n\tInputData\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12%\n\x04\x64\x61ta\x18\x02 \x01(\x0b\x32\x17.google.protobuf.Struct\"S\n\nOutputData\x12\x0e\n\x06stdout\x18\x01 \x01(\t\x12\x0e\n\x06stderr\x18\x02 \x01(\t\x12%\n\x04\x64\x61ta\x18\x03 \x01(\x0b\x32\x17.google.protobuf.Struct20\n\x06\x43oreJS\x12&\n\x07\x45xecute\x12\n.InputData\x1a\x0b.OutputData\"\x00\x30\x01\x62\x06proto3')



_INPUTDATA = DESCRIPTOR.message_types_by_name['InputData']
_OUTPUTDATA = DESCRIPTOR.message_types_by_name['OutputData']
InputData = _reflection.GeneratedProtocolMessageType('InputData', (_message.Message,), {
  'DESCRIPTOR' : _INPUTDATA,
  '__module__' : 'core_pb2'
  # @@protoc_insertion_point(class_scope:InputData)
  })
_sym_db.RegisterMessage(InputData)

OutputData = _reflection.GeneratedProtocolMessageType('OutputData', (_message.Message,), {
  'DESCRIPTOR' : _OUTPUTDATA,
  '__module__' : 'core_pb2'
  # @@protoc_insertion_point(class_scope:OutputData)
  })
_sym_db.RegisterMessage(OutputData)

_COREJS = DESCRIPTOR.services_by_name['CoreJS']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _INPUTDATA._serialized_start=44
  _INPUTDATA._serialized_end=108
  _OUTPUTDATA._serialized_start=110
  _OUTPUTDATA._serialized_end=193
  _COREJS._serialized_start=195
  _COREJS._serialized_end=243
# @@protoc_insertion_point(module_scope)
