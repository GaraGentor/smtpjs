'use strict'

function verificaEmail(username) {
  return !(username
    .match(/^[a-zA-Z][a-zA-Z0-9\.\-\_]*@[a-zA-Z][a-zA-Z0-9\.\-\_]*\.[a-zA-Z]{2,4}$/));
}

exports = module.exports = function authentication(newUsers) {
  return {
    authenticate: function (username, password) {
      if (verificaEmail(username)) return false;
      return newUsers.filter(
        (user) => (user.username == username && user.password == password))
        .length > 0;
    }
  };
}
