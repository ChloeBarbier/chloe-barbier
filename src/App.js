import React, { useState, useEffect, useContext } from 'react';
import { Context } from './config/state.manager';
import './App.scss';
import { initialState } from './config/state.manager';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { Language } from './enums/Language';

const App = () => {
  const { i18n } = useTranslation();
  const { state } = useContext(Context);
  const { homeIsActive } = state || initialState;
  let [isActive, setIsActive] = useState(homeIsActive);
  let [lang, setLang] = useState(i18n.language);
  let [searchParams] = useSearchParams({});

  useEffect(() => {
    setIsActive(homeIsActive === true);
  }, [homeIsActive]);

  useEffect(() => {
    var langParam = searchParams.get('lang');
    if (langParam && langParam !== lang) {
      setLang(langParam === Language.EN ? Language.EN : Language.FR);
      i18n.changeLanguage(langParam === Language.EN ? Language.EN : Language.FR);
    }
}, [searchParams, lang, i18n])

  return (
    <div className={`App ${isActive ? 'HomeIsActive' : ''}`}>
      <Header lang={lang} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
