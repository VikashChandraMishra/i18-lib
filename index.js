const { i18n } = require('./i18n');

const newObject = new i18n(
    'en',
    [
        'en',
        'hi',
        'as'
    ],
    {
        'en': {
            'hi': 'hey'
        },
        'hi': {
            'hi': 'hey'
        },
        'as': {
            'hi': 'hey'
        }
    }
);