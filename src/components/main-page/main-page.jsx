import React from 'react';
import Header from '../header/header';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
// import styles from './main-page.module.scss';

function MainPage() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="visually-hidden">Конвертер Лига банка.</h1>
        <Promo />
        <Converter />
      </main>
    </div>
  );
}

export default MainPage;
