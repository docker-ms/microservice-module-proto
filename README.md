## Description

- This is one node module which will provide all our microservices' **.protos**.

## Note

1. Since it seems bitbucket branch tag doesn't work for `npm install`, so we use **master** branch.

## Memo

```
  export PB_GO_PROJ=bitbucket.org/v-cube/microservice-module-proto

  export PB_GO_DST=${GOPATH}/src/${PB_GO_PROJ}

  export PROTOS_lib_GO_IMPORT_PATH=${PB_GO_PROJ}/lib

  export PROTOS_microservice_GO_IMPORT_PATH=${PB_GO_PROJ}/microservice
  export PROTOS_microservice_lsync_GO_IMPORT_PATH=${PROTOS_microservice_GO_IMPORT_PATH}/lsync
  export PROTOS_microservice_lsync_v1_GO_IMPORT_PATH=${PROTOS_microservice_lsync_GO_IMPORT_PATH}/v1

  protoc -I=. \
  --gogofast_out=plugins=grpc,\
  \
  Mlib/bool_res.proto=${PROTOS_lib_GO_IMPORT_PATH},\
  Mlib/empty.proto=${PROTOS_lib_GO_IMPORT_PATH},\
  Mlib/enums.proto=${PROTOS_lib_GO_IMPORT_PATH},\
  Mlib/mobile_phone.proto=${PROTOS_lib_GO_IMPORT_PATH},\
  \
  Mmicroservice/common.proto=${PROTOS_microservice_GO_IMPORT_PATH},\
  Mmicroservice/health_check.proto=${PROTOS_microservice_GO_IMPORT_PATH},\
  \
  Mmicroservice/lsync/apis.proto=${PROTOS_microservice_lsync_GO_IMPORT_PATH}:\
  \
  ${PB_GO_DST} \
  microservice/*.proto
```


