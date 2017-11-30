const assert = require('assert');
const registry = require('../registry');

describe("il registry dovrebbe gestire l'elenco delle e-mail", () => {
    it('devo poter inserire un indirizzo e-mail', () => {
        assert.equal(
            registry.add('mario@socraten.it'), true,
            'deve restituire true per aggiunta');

        assert.equal(registry.exists('mario@socraten.it'), true,
            "deve trovare l'indirizzo inserito");

        assert.equal(
            registry.add('mario@socraten.it'), false,
            'deve restituire false perché non può aggiungerlo');

        registry.clean();
    })

    it('devo poter cancellare un indirizzo e-mail', () => {
        registry.add('mario@socraten.it');

        assert.equal(
            registry.del('mario@socraten.it'), true,
            'deve restiruite true perché lo cancella');

        assert.equal(registry.exists('mario@socraten.it'), false,
            "non deve trovare l'indirizzo inserito");

        assert.equal(
            registry.del('mario@socraten.it'), false,
            'deve restituire false perché non lo può cancellare');
    })

    it('devo poter trovare un utente presente', () => {
        registry.add('mario@socraten.it');
        registry.add('mirko@socraten.it');

        assert.equal(registry.exists('mirko@socraten.it'), true,
            "deve trovare l'indirizzo inserito");

        assert.equal(registry.exists('nicola@socraten.it'), false,
            "non deve trovare l'indirizzo inserito");

        registry.clean();
    })

    it('devo poter cancellare tutti le e-mail presenti', () => {
        registry.add('mario@socraten.it');
        registry.add('mirko@socraten.it');

        registry.clean();

        assert.equal(registry.exists('mirko@socraten.it'), false,
            "non deve trovare l'indirizzo inserito");

        assert.equal(registry.exists('mario@socraten.it'), false,
            "non deve trovare l'indirizzo inserito");
    })
})