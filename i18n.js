const { isObjectEmpty } = require("./util/commonhelpers");
const { replaceKeys } = require("./util/interpolation");

const DEFAULT_LANGUAGE = 'en';

class i18n {

    #selectedLanguage = DEFAULT_LANGUAGE;
    #languages = [];
    #allTranslations = {};

    constructor(selectedLanguage, languages, translations) {

        this.#languages = languages || [];
        this.setLanguage(selectedLanguage);
        this.#allTranslations = translations || {};

        this._crosscheckLanguagesWithTranslations();

    }

    // check for one-to-one correspondence between languages and translations provided
    _crosscheckLanguagesWithTranslations() {

        const languagesFromAllTranslations = Object.keys(this.#allTranslations);

        if (languagesFromAllTranslations.length != this.#languages.length) throw {
            name: "TranslationsAndLanguagesLengthNotMatchingError",
            message: "Lengths of translations object and languages array must be same"
        };

        for (let i in this.#languages) {

            if (!languagesFromAllTranslations.includes(this.#languages[i])) {
                throw {
                    name: "TranslationsMissingError",
                    message: "Translations object must contain translations for all languages defined in the languages array"
                };
            }
        }

    }

    getLanguages() {
        return this.#languages;
    }

    setLanguage(language) {

        if (!language)
            this.#selectedLanguage = DEFAULT_LANGUAGE;

        else if (!this.#languages.includes(language))
            throw {
                name: "LanguageNotFoundError",
                message: "Please choose a language from the languages array"
            }

        else
            this.#selectedLanguage = language;

    }

    getSelectedLanguage() {
        return this.#selectedLanguage;
    }

    t(
        text,
        {
            fallBackText,
            interpolationObject
        }) {

        const selectedTranslations = this.#allTranslations[this.#selectedLanguage];

        const textArray = text.split(' ');
        let translatedText = '';

        for (let i in textArray) {

            if (Object.keys(selectedTranslations).includes(textArray[i])) {

                translatedText += selectedTranslations[textArray[i]] + ' ';

            } else if (fallBackText) {
                return fallBackText;

            } else throw {
                name: "TranslationNotFoundError",
                message: "The translations provided for the given language does not include the translation for \'" + text + "\'"
            }

        }

        if (!isObjectEmpty(interpolationObject)) {
            translatedText = replaceKeys(translatedText, interpolationObject);
        }

        return translatedText;

    }
}

module.exports = { i18n, DEFAULT_LANGUAGE };