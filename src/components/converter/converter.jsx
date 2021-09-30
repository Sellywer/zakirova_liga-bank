import React from 'react';
import styles from './converter.module.scss';

function Converter() {
  return(
    <section className={styles.converter}>
      <h2>Конвертер валют</h2>
      <form action="#" method="get">
        <label htmlFor="have-currency-amount">
          <span>У меня есть</span>
          <div>
            <input
              type="number"
              id="have-currency-amount"
            >
            </input>
            <select>
              <option>RUB</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </label>
        <label htmlFor="want-currency-amount">
          <span>Хочу приобрести</span>
          <div>
            <input
              type="number"
              id="want-currency-amount"
            >
            </input>
            <select>
              <option>RUB</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </label>
        <input placeholder="Календарь"></input>
        <button>Сохранить результат</button>
      </form>
    </section>
  );
}

export default Converter;
