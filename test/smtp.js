const assert = require('assert');
const makeSmtp = require('../smtp');

const authenticatedUser = {
    username: 'io@me.com',
    password: 'go'
};

const users = [authenticatedUser.username];

const authenticate = {
    authenticate: function (u, p) {
        return u == authenticatedUser.username;
    }
}

describe('vorrei ricevere un errore se, come utente autenticato, provo a mandare una e-mail ad un indirizzo e-mail non presente sul server', 
    () => {

    it('solo un utente autenticato può creare un smtp', () => {
        assert.throws(() =>
        makeSmtp(authenticate, {
            username: 'nonso@da.dove',
            password: 'no'
        }), 'autenticazione fallita');
    })

    it('da utente autenticato devo poter mandare un messaggio', () => {
        const smtp = makeSmtp(authenticate, authenticatedUser);

        assert.notEqual(smtp, null, "deve creare l'oggetto smtp");

        assert.equal(
            smtp.sendMail(authenticatedUser.username, 'test', 'test test'),
            true,
            'dovrebbe concudersi correttamente'
        );
    })
});