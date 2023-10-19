const { i18n } = require('./i18n');

const newObject = new i18n(
    'en',
    [
        'en',
        'hi'
    ],
    {
        'en': {
            'hi': 'hey',
            'how': 'how',
            'where': 'where',
            'are': 'are',
            'you': 'you',
            'bye': 'bye',
            "key": "{{what}} is {{how}}"
        },
        'hi': {
            'hi': 'namaste',
            'how': 'kese',
            'where': 'kaha',
            'are': 'ho',
            'you': 'tum',
            'bye': 'alvida',
            "key": "{{where}} hai {{country}}?"
        }
    }
);

console.log(newObject.t("how are you", 'gadbad ho gayi'));

newObject.setLanguage('hi');

console.log(
    newObject.t(
        "key",
        {
            fallBackText: 'gadbad ho gayi',
            interpolationObject: { where: 'Kahan', country: 'Japan' }
        }));

console.log(newObject.t("where are you", 'something went wrong'));

newObject.setLanguage();

console.log(
    newObject.t(
        "key",
        {
            fallBackText: 'gadbad ho gayi',
            interpolationObject: { what: 'nothing', how: 'no way heheehhehe' }
        }));