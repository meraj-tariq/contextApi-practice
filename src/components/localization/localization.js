import React, { useContext, useEffect } from 'react'
import { languageOptions } from './languages';
import { LanguageChangeContext } from './localContext/LocalContex'

export default function Localization() {
    const style = {
        selectStyle: {
            border: '2px solid black',
            borderRadius: '10px',
            width: '15%',
            padding: '5px',
            outline: 'none',
        }
    }

    const { userLanguage, userLanguageChange } = useContext(LanguageChangeContext);
    const handleLanguageChange = (e) => {
        userLanguageChange(e.target.value);
    }
    useEffect(() => {
        let defaultLanguage = window.localStorage.getItem('rcml-lang');
        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }
        userLanguageChange(defaultLanguage);
    }, [userLanguageChange]);
    return (
        <div >
            <h1>Select Language</h1>
            <select style={style.selectStyle} value={userLanguage}
                onChange={handleLanguageChange}>
                {Object.entries(languageOptions).map(([id, name]) => (
                    <option value={id} key={id}>{name}</option>
                ))}
            </select>
        </div>
    )
}
