import React from 'react';
import { useTranslation } from './TranslationProvider';

const T = ({ children }) => {

    const { translate } = useTranslation();

    return (
        <>
            {translate(children)}
        </>
    )
}

export default T;