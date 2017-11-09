const assert = require('assert');
const makeAuthentication = require('../authentication');

let authentication;

describe('come utente devo potermi autenticare con nome utente e password',
  () => {

  beforeEach(() => {
      const users = [{
        username: "mario@socraten.com",
        password: "miapass"
      },{
        username: "mirko",
        password: "lasuapass"
      }];
      authentication = makeAuthentication(users);
  })

  it('dovrebbe accettare utente e password', () => {
    const isAuthenticated = authentication
      .authenticate("mario@socraten.com", "miapass");
    assert.equal(isAuthenticated, true);
  })

  it('con utente o password errati, ritorna false', () => {
    let isAuthenticated = authentication.authenticate("mario", "miapass");
    assert.equal(isAuthenticated, false);
    isAuthenticated = authentication
      .authenticate("mario@socraten.com", "tuapass");
    assert.equal(isAuthenticated, false);
  })

  it('deve accettare solo username indirizzi e-mail', () => {
    const isAuthenticated = authentication.authenticate("mirko", "lasuapass");
    assert.equal(isAuthenticated, false);
  })
})
