import React from 'react'
import Container from './container'
import Localization from './localization'

function LanguageContext() {
    return (
        <div>
            <Localization />
            <Container />
        </div>
    )
}

export default LanguageContext;
