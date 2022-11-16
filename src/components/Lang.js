import React from "react"
import PropTypes from 'prop-types';
import { Language } from '../enums/Language';
import { useSearchParams } from "react-router-dom";
 
const Lang = ({lang}) => {
    let [searchParams, setSearchParams] = useSearchParams({});
    
    const onClick = () => {
        const newLang = lang === Language.EN ? Language.FR : Language.EN;
        searchParams.set('lang', newLang);
        setSearchParams(searchParams);
    }
 
    return (
        <div onClick={onClick} className="menu-item switch-language grid-x align-middle">
            {lang === Language.EN ? 'FR' : 'EN'}
        </div>
    )
}

Lang.defaultProps = {
    lang: Language.FR
}
    
Lang.propTypes = {
    lang: PropTypes.string
}

export default Lang;