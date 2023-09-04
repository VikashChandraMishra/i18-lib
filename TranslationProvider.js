import
React,
{
    createContext,
    useContext,
} from 'react';

const TranslationContext = createContext();

export function TranslationProvider({ children, i18nObject }) {

    const translate = (text) => i18nObject.t(text, "translation not available");

    return (
        <TranslationContext.Provider value={{ translate }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    return useContext(TranslationContext);
}