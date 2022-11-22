import React from 'react';
import PropTypes from 'prop-types';
import Lang from "../components/Lang";
import { Link } from "react-router-dom";
import { getNewSearchParams } from '../tools';
import { useTranslation } from "react-i18next";
import { Language } from '../enums/Language';

const Header = ({lang}) => {
    const { t } = useTranslation();
    const newSearchParams = getNewSearchParams({});
    
    return (
        <header className={`App-header`}>
          <div className='content-header'>
            <div className='container'>
              <div className={`title`}>
                <Link className="main-title" to={`/${newSearchParams}`}>
                  <img src="/assets/img/ET.png" alt="icon" />
                </Link>
              </div>
              <nav className={`menu`}>
                <Link className="menu-item" to={`experience${newSearchParams}`}>{t('nav.experience')}</Link>
                <Link className="menu-item" to={`education${newSearchParams}`}>{t('nav.education')}</Link>
                <Link className="menu-item" to={`projects${newSearchParams}`}>{t('nav.projects')}</Link>
                <Link className="menu-item" to={`contact${newSearchParams}`}>{t('nav.contact')}</Link>
                <Lang lang={lang} />
              </nav>
            </div>
          </div>
        </header>
    )
}
Header.defaultProps = {
  lang: Language.FR
}
  
Header.propTypes = {
  lang: PropTypes.string
}
export default Header;