const frisby = require('frisby');

module.exports = function () {
  return frisby
    .post(
      `https://${process.env.IDENTITY_MANAGER}/api/v1/connect/renew-token-email`,
      {
        email: 'claudette.b@projetlucie.com',
        tokenValidityDays: 1,
      },
    )
    .expect('status', 200);
};
