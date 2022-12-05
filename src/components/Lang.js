import React from "react"
import PropTypes from 'prop-types';
import { Language } from '../enums/Language';
import { useSearchParams } from "react-router-dom";
 
const Lang = ({lang, isBurgerNav}) => {
    let [searchParams, setSearchParams] = useSearchParams({});
    
    const onClick = () => {
        const newLang = lang === Language.EN ? Language.FR : Language.EN;
        searchParams.set('lang', newLang);
        setSearchParams(searchParams);
    }
 
    return (
        <div 
        onClick={onClick} 
        className={`${isBurgerNav ? 'cell align-center' : 'align-middle'} menu-item switch-language grid-x`}>
            {lang === Language.EN ? 'FR' : 'EN'}
        </div>
    )
}

Lang.defaultProps = {
    lang: Language.FR,
    isBurgerNav: false
}
    
Lang.propTypes = {
    lang: PropTypes.string,
    isBurgerNav: PropTypes.bool
}

export default Lang;