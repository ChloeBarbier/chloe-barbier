import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Lang from "../components/Lang";
import { Link } from "react-router-dom";
import { getNewSearchParams } from '../tools';
import { useTranslation } from "react-i18next";
import { Language } from '../enums/Language';

const IS_CLOSED = "isClosed";
const IS_OPEN = "isOpen";

const NavModal = ({isOpen, setisOpen, lang}) => {
    const newSearchParams = getNewSearchParams({});
    const { t } = useTranslation();

    const [modalClass, setmodalClass] = useState(IS_CLOSED);
    const onClickClose = () => {
        setisOpen(false);
    }
    window.onclick = () => {
        if (isOpen && modalClass === IS_OPEN) {
            setisOpen(false);
        }
    }

    useEffect(() => {
        setmodalClass(isOpen ? IS_OPEN : IS_CLOSED);
    }, [isOpen]);

    return (
        <div id="navModal" className={`modal ${modalClass}`}>
            <div className="modal-content grid-x align-center">
                <nav className={`menu-burger menu grid-y justify-items`}>
                    <span className="cell menu-item close" onClick={onClickClose}>&times;</span>
                    <Link className="cell menu-item" to={`experience${newSearchParams}`}>{t('nav.experience')}</Link>
                    <Link className="cell menu-item" to={`education${newSearchParams}`}>{t('nav.education')}</Link>
                    <Link className="cell menu-item" to={`projects${newSearchParams}`}>{t('nav.projects')}</Link>
                    <Link className="cell menu-item" to={`contact${newSearchParams}`}>{t('nav.contact')}</Link>
                    <Lang isBurgerNav={true} lang={lang} />
                </nav>
            </div>
        </div>
    )
}

NavModal.defaultProps = {
    isOpen: false,
    setisOpen: () => {},
    lang: Language.FR
}
    
NavModal.propTypes = {
    isOpen: PropTypes.bool,
    setisOpen: PropTypes.func,
    lang: PropTypes.string
}

export default NavModal;