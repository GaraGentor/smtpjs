'use strict'

const MakeResult = (success, error) => ({
    "ok": success,
    "error": error
});

exports = module.exports = function (
        authentication, 
        account, 
        validDestination = () => true) 
{
    if (!authentication.authenticate(account.username, account.password)) {
        throw new Error('autenticazione fallita');
    }

    return {
        sendMail: function(destination, subject, message) {
            if (!validDestination(destination)) {
                return MakeResult(false, "destination not found");
            }

            return MakeResult(true);
        }
    };
}
