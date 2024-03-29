import React from 'react';
import { useTranslation } from "react-i18next";
import Title from '../components/Title';
import { DivEnd, DivStart, Text } from '../components/Html';

const Home = () => {
  const { t } = useTranslation();
  const webdev = t("home.webdev");
  const frontend = t("home.frontend");
  const engineer = t("home.engineer");
  const physics = t("home.physics");

  return (
    <div className='container home'>
      <div className="container-title grid-y align-middle">
          <Title  text="Chloé Barbier" />
          <div className='title-html grid-y'>
            <DivStart tab="" text="present job" />
            <Text tab="one" text={webdev} />
            <DivStart tab="one" text="specialization" />
            <Text tab="two" text={frontend} />
            <DivEnd tab="one" />
            <DivEnd tab="" />
            <DivStart tab="" text="job" />
            <Text tab="one" text={engineer} />
            <DivStart tab="one" text="specialization" />
            <Text tab="two" text={physics} />
            <DivEnd tab="one" />
            <DivEnd tab="" />
          </div>
        </div>
    </div>
  );
}

export default Home;