const frisby = require('frisby');
const getAccessToken = require('../../steps/getAccessToken.js');

describe('Prestation à controller', () => {
  it('Doit retourner la liste des prestations a controller', async () => {
    var res = await getAccessToken();
    await frisby
      .fetch(
        `https://${process.env.PRESTATION}/api/v1/prestation-sante/prestations-a-controler`,
        {
          method: 'get',
          headers: {
            Authorization: 'Bearer ' + res.json.accessToken,
          },
        },
      )
      .expect('status', 200);
  });
});
