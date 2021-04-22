import React, { useContext } from 'react'
import { dictionaryList } from './languages';
import { LanguageChangeContext } from './localContext/LocalContex';

function Container() {
    const { userLanguage } = useContext(LanguageChangeContext);
    const localLanguage = dictionaryList[userLanguage]
    console.log(userLanguage, localLanguage, "userLanguage");

    return (
        <div>
            <h1>{localLanguage.exploreHeader}</h1>
            <p>
                {localLanguage.welcomeDescription}
            </p>
            <h3>About</h3>
            <strong>{localLanguage.aboutMe}</strong>
            <button>{localLanguage.clickMe}</button>
        </div>
    )
}

export default Container;
