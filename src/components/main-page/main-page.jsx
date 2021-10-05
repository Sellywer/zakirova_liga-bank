import React from 'react';
import Header from '../header/header';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import Footer from '../footer/footer';
import styles from './main-page.module.scss';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <h1 className="visually-hidden">Конвертер Лига банка.</h1>
        <Promo />
        <Converter />
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;
