import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import BusinessCard from '../components/BusinessCard';
import About from '../components/About';
import Title from '../components/Title';

const Contact = () => {
  const { t } = useTranslation();
  const [isMouseHover, setisMouseHover] = useState(false);

  return (
    <div className='container contact'>
      <div className="grid-y">
        <Title text={t('nav.contact')} />
        <div className='grid-x grid-margin-x'>
          <BusinessCard setisMouseHover={setisMouseHover} isMouseHover={isMouseHover}/>
          <About setisMouseHover={setisMouseHover} />
        </div>
      </div>
    </div>
  );
}
  
export default Contact;