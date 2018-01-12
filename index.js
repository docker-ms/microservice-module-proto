'use strict';

const path = require("path");

module.exports = {

  root: __dirname,

  auth: './microservice/auth/apis.proto',
  util: './microservice/util/apis.proto',
  chat: './microservice/chat/apis.proto',
  lsync: './microservice/lsync/apis.proto',
  users: './microservice/users/apis.proto',
  groups: './microservice/groups/apis.proto',
  companies: './microservice/companies/apis.proto',

  enums: {

    genders: {
      U: 0,
      F: 1,
      M: 2,
      O: 3,
      exposedAs: {
        'en': {
          'U': 'U',
          'F': 'F',
          'M': 'M',
          'O': 'O'
        },
        'zh-cn': {
          '男': 'M',
          '女': 'F',
          '其它': 'O'
        }
      }
    },

    userStatuses: {
      INITIALIZED: 0,
      ACTIVE:      1,
      LOCKED:      2,
      DELETED:     3
    },

    conversationTypes: {
      ONE2ONE:      0,
      TEMP_ONE2ONE: 1,
      GROUP:        2,
      TEMP_GROUP:   3
    },

    conversationStatuses: {
      ACCESSIBLE: 0,
      FROZEN:     1,
      DESTROYED:  2
    },

    messageTypes: {
      TEXT:  0,
      FILE:  1,
      IMAGE: 2,
      AUDIO: 3,
      VIDEO: 4,
      MULTI: 5
    },

    messageStatuses: {
      NORMAL:  0,
      RECALLED: 1
    },
    
    lsyncDataPackTypes: {
      BUCKET:     0,
      DELTA:      1,
      SNAPSHOT:   2,
      COMPLEMENT: 3
    }

  },

  constants: {
    // In byte.
    bestFragmentSize: 32 * 1024
  }

};


