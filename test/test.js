const assert = require('chai').assert;
const { i18n } = require('../i18n');

describe('Check i18n class', function () {

    const locale = 'en';
    const languages = ['en', 'hi'];
    const translations = {
        'en': {
            'hi': 'hey',
            'how': 'how',
            'where': 'where',
            'are': 'are',
            'you': 'you',
            'bye': 'bye'
        },
        'hi': {
            'hi': 'namaste',
            'how': 'kese',
            'where': 'kaha',
            'are': 'ho',
            'you': 'tum',
            'bye': 'alvida'
        }
    };

    const translator = new i18n(locale, languages, translations);

    it('match languages set in object', function () {
        assert.lengthOf(translator.getLanguages(), 2, 'two languages have been provided to the translator');
        assert.strictEqual(translator.getLanguages(), languages, 'languages returned match the languages provided');
    });

    it('test run-time change of selected language', function () {
        assert.equal(
            translator.t("where are you", { fallBackText: "something went wrong" }),
            "where are you",
            "translation matched"
        );
        translator.setLanguage('hi');
        assert.strictEqual(
            translator.t("where are you", { fallBackText: "something went wrong" }),
            "kaha ho tum",
            "translation not matched"
        );
        translator.setLanguage('en');
        assert.notEqual(
            translator.t("where are you", { fallBackText: "something went wrong" }),
            "kaha ho tum",
            "translation matched"
        );

    });

    it('test fall back mechanism for translation', function () {
        assert.strictEqual(
            translator.t("where are you  ", { fallBackText: "something went wrong" }),
            "something went wrong",
            "fallback text returns"
        );
    });

    it('test interpolation', function () {
        assert.strictEqual(
            translator.t("where are you {{name}}", { fallBackText: "something went wrong", interpolationObject: { name: 'Ramesh' } }),
            "where are you Ramesh",
            "fallback text returns"
        );

        assert.strictEqual(
            translator.t("{{where}} {{name}}", {
                fallBackText: "something went wrong", interpolationObject: {
                    where: 'Somewhere',
                    name: 'Ramesh'
                }
            }),
            "Somewhere Ramesh",
            "fallback text returns"
        );
    });

});