import React from 'react';
import './main.scss';
import { Header } from '../../components';
import { GridContainer } from '../../containers';

function Main() {
  return (
    <div className="main">
      <Header />
      <GridContainer />
    </div>
  );
}

export default Main;
