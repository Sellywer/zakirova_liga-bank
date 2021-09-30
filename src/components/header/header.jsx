import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/img/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logo} width="149" height="25" alt="Логотип Лига банка"/>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#services">Услуги</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#calculator">Рассчитать кредит</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#converter">Конвертер валют</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#contacts">Контакты</a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="#question">Задать вопрос</a>
            </li>
          </ul>
          <div>
            <a className={styles.login} href="/">
              Войти в Интернет-банк
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
