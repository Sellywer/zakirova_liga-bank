import React from 'react';
import styles from './promo.module.scss';

function Promo() {
  return (
    <section className={styles.promo}>
      <div className={styles.wrapper}>
        <h2 className="visually-hidden">Промоакции</h2>
        <h2 className={styles.title}>Лига Банк</h2>
        <p className={styles.text}>Кредиты на любой случай</p>
        <a className={styles.button} href="#calculator" >
          Рассчитать кредит
        </a>
      </div>
    </section>

  );
}

export default Promo;
