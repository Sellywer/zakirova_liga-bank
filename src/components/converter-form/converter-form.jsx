import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHistory, addRates } from '../../store/actions';
import axios from 'axios';
import dayjs from 'dayjs';
import styles from './converter-form.module.scss';
import Calendar from '../calendar/calendar';
import ConverterInput from '../converter-input/converter-input';
import {
  MIN_VALUE,
  MAX_LENGTH,
  USD,
  RUB,
  BACKEND_URL,
  APP_ID,
  LabelValues,
  getFormattedValue
} from '../utils';
import {  } from '../utils';

let id = 1;

function ConverterForm () {

  const dispatch = useDispatch();
  const rates = useSelector((state) => state.rates);

  const [date, setDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [amountFrom, setAmountFrom] = useState(MIN_VALUE);
  const [currencyFrom, setCurrencyFrom] = useState(RUB);
  const [amountTo, setAmountTo] = useState(MIN_VALUE);
  const [currencyTo, setCurrencyTo] = useState(USD);

  /* eslint-disable */
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/${dayjs(date).format('YYYY-MM-DD')}${APP_ID}`)
      .then(({ data }) => {
        const dataRates = data.rates;
        dispatch(addRates(data.rates));
        setAmountTo(
          getFormattedValue(
            (+amountFrom / dataRates[currencyFrom]) * dataRates[currencyTo],
          ),
        );
      })
      .catch(() => {
        setDate((date) => {
          const updatedDate = dayjs(date).subtract(1, 'day');
          setCurrentDate(new Date(updatedDate));
          return updatedDate;
        });
      });
  }, [date, dispatch]);

  const handleDataChange = (selectedDates) => {
    const selectedDate = selectedDates[0];
    setDate(selectedDate);
  };

  const onAmountFromChange = (evt) => {
    const value = evt.target.value.replace(/^0+/, '');

    if (value.length < MAX_LENGTH) {
      setAmountFrom(value);
      setAmountTo(
        getFormattedValue((+value / rates[currencyFrom]) * rates[currencyTo]),
      );
    }
  };

  const onCurrencyFromChange = (evt) => {
    const value = evt.target.value;
    setCurrencyFrom(value);
    setAmountTo(
      getFormattedValue((+amountFrom / rates[value]) * rates[currencyTo]),
    );
  };

  const onAmountToChange = (evt) => {
    const value = evt.target.value.replace(/^0+/, '');

    if (value.length < MAX_LENGTH) {
      setAmountTo(value);
      setAmountFrom(
        getFormattedValue((+value * rates[currencyFrom]) / rates[currencyTo]),
      );
    }
  };

  const onCurrencyToChange = (evt) => {
    const value = evt.target.value;
    setCurrencyTo(value);
    setAmountTo(
      getFormattedValue((+amountFrom / rates[currencyFrom]) * rates[value]),
    );
  };

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(
      addHistory({
        id: id++,
        date: dayjs(date).format('DD.MM.YYYY'),
        amountFrom,
        currencyFrom,
        amountTo,
        currencyTo,
      }),
    );
  };

  return(
    <section className={styles.converter}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Конвертер валют</h2>
        <form className={styles.form} action="#" method="get">
          <label className={styles.label}>
            <span className={styles.text}>У меня есть</span>
            <ConverterInput
              labelValue={LabelValues.FROM}
              amountValue={amountFrom}
              currencyValue={currencyFrom}
              onAmountChange={onAmountFromChange}
              onCurrencyChange={onCurrencyFromChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.text}>Хочу приобрести</span>
            <ConverterInput
              labelValue={LabelValues.TO}
              amountValue={amountTo}
              currencyValue={currencyTo}
              onAmountChange={onAmountToChange}
              onCurrencyChange={onCurrencyToChange}
            />
          </label>
          <Calendar
            date={currentDate}
            onDataChange={handleDataChange}
          />
          <button
            className={styles.button}
            type="submit"
            onClick={handleButtonClick}
          >
            Сохранить результат
          </button>
        </form>
      </div>
    </section>
  );
}

export default ConverterForm;
