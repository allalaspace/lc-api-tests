const frisby = require('frisby');

exports.setup = function () {
  frisby.globalSetup({
    timeout: 100000,
  });
};
