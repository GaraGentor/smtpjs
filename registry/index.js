
const emails = [];

module.exports.add = function (email) {
    if (emails.indexOf(email) === -1) {
        emails.push(email);
        return true;
    }

    return false;
}

module.exports.del = function (email) {
    const idx = emails.indexOf(email);
    if (idx !== -1) {
        emails.splice(idx, 1);
        return true;
    }

    return false;
}

module.exports.exists = function (email) {
    return emails.indexOf(email) !== -1;
}

module.exports.clean = function () {
    emails.splice(0);
}

exports = module.exports;