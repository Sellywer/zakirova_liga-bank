import React from 'react';
import PropTypes from 'prop-types';
import styles from './converter-input.module.scss';
import { useSelector } from 'react-redux';

function ConverterInput({
  amountValue,
  currencyValue,
  onAmountChange,
  onCurrencyChange,
  labelValue,
}) {
  const rates = useSelector((data) => data.rates);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={onAmountChange}
        type="number"
        aria-label={labelValue}
        min="0"
        max="1000000000"
        placeholder="0"
        value={amountValue}
      />
      <select
        className={styles.select}
        onChange={onCurrencyChange}
        value={currencyValue}
      >
        {Object.keys(rates).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

ConverterInput.propTypes = {
  labelValue: PropTypes.string.isRequired,
  amountValue: PropTypes.string.isRequired,
  currencyValue: PropTypes.string.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default ConverterInput;
