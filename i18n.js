class i18n {

    selectedLanguage = 'en';

    constructor(selectedLanguage, languages, translations) {

        this.selectedLanguage = selectedLanguage;
        this.languages = languages || [];
        this.translations = translations || {};

        this._crosscheckLanguagesWithTranslations();

    }

    _crosscheckLanguagesWithTranslations() {

        const languagesFromTranslations = Object.keys(this.translations);

        if (languagesFromTranslations.length != this.languages.length) throw {
            name: "TranslationsAndLanguagesLengthNotMatchingError",
            message: "Lengths of translations object and languages array must be same"
        };

        for (let i in this.languages) {

            if (!languagesFromTranslations.includes(this.languages[i])) {
                throw {
                    name: "TranslationsMissingError",
                    message: "Translations object must contain translations for all languages defined in the languages array"
                };
            }
        }

    }

    getLanguages() {
        return this.languages;
    }

    getSelectedLanguage() {
        return this.selectedLanguage;
    }

}

module.exports = { i18n };