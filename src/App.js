import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { Language } from './enums/Language';

const App = () => {
  const { i18n } = useTranslation();
  let [lang, setLang] = useState(i18n.language);
  let [searchParams] = useSearchParams({});

  useEffect(() => {
    var langParam = searchParams.get('lang');
    if (langParam && langParam !== lang) {
      setLang(langParam === Language.EN ? Language.EN : Language.FR);
      i18n.changeLanguage(langParam === Language.EN ? Language.EN : Language.FR);
    }
}, [searchParams, lang, i18n])

  return (
    <div className={`App`}>
      <Header lang={lang} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
