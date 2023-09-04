import
React,
{
    useContext,
} from 'react';
import TranslationContext from "./TranslationContext";

export function TranslationProvider({ children, i18nObject }) {

    const translate = (text) => i18nObject.t(text, "translation not available");

    const changeLanguage = (language) => i18nObject.setLanguage(language);

    return (
        <TranslationContext.Provider
            value={{
                translate,
                changeLanguage
            }}>
            {children}
        </TranslationContext.Provider>
    );
}