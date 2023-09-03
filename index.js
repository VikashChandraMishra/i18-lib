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
            'are': 'are',
            'you': 'you',
            'bye': 'bye'
        },
        'hi': {
            'hi': 'namaste',
            'how': 'kese',
            'are': 'ho',
            'you': 'tum',
            'bye': 'alvida'
        }
    }
);

console.log(newObject.t("how are you bye", 'kal aana'));