import React from 'react';
import Triple from './artDecoBox/triple';
import HeaderTitle from './header/header'
import Nav from './nav/nav'
import DecoFrame from './artDecoBox/decoFrame'
import Hero from './hero/hero'
import './app.css'

const App: React.FC = () => {
  return (
    <>
      <div className="site">

        <HeaderTitle title='BGI Resources, LLC.' subtitle="Osage County, Oklahoma" />
        <Hero />
      </div>
    </>
  );
};

export default App;