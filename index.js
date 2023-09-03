const { i18n } = require('./i18n');

const newObject = new i18n(
    'hi',
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
    }
);

console.log(newObject.t("how are you", 'gadbad ho gayi'));

newObject.setLanguage('en');

console.log(newObject.t("where are you", 'something went wrong'));

newObject.setLanguage('hi');

console.log(newObject.t("where are you", 'gadbad ho gayi'));