const frisby = require('frisby');
const getAccessToken = require('../../steps/getAccessToken');
const create_devis_fixture_body = require('./__fixture__/creation_devis_fixture');
const { setup } = require('../../setup_frisby');

describe("Création d'un devis", () => {
  setup();
  it('Doit créer un devis', async () => {
    var res = await getAccessToken();
    await frisby
      .fetch(
        `https://${process.env.SOUSCRIPTION_EMPLOYEUR}/api/v1/devis-commercial/start-registration-devis-commercial`,
        {
          method: 'post',
          headers: {
            Authorization: 'Bearer ' + res.json.accessToken,
          },
          'Content-Type': 'application/json',
          body: create_devis_fixture_body(),
        },
      )
      .catch((err) => {
        console.log('Error!', err);
      })
      .expect('status', 200);
  });
});
