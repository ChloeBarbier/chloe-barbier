import React, { useState } from "react"
import { useTranslation } from 'react-i18next';
import { Language } from '../enums/Language';
 
const Lang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.lng);
 
    let changeLanguage = () => {
        // console.log(e)
        // let language = ;
 
        switch (lang) {
            case Language.EN:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
            case Language.FR:
            default:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
        }
    }
 
    return (
        <div className="menu-item switch-language grid-x align-middle">
            <div onClick={changeLanguage}>
                {lang === Language.EN ? 'FR' : 'EN'}
            </div>
        </div>
    )
}
 
export default Lang;