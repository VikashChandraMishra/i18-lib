import React, { useContext } from 'react';
import TranslationContext from './TranslationContext';

const T = ({ children }) => {

    const { translate } = useContext(TranslationContext);

    return (
        <>
            {translate(children)}
        </>
    )
}

export default T;