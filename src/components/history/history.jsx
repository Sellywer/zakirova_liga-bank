import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../../store/actions';
import styles from './history.module.scss';
import HistoryList from '../history-list/history-list';

function History() {
  const history = useSelector((data) => data.history);

  const dispatch = useDispatch();

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(clearHistory());
  };

  return (
    <section className={styles.history}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>История конвертации</h2>
        <HistoryList />
        <button
          className={styles.button}
          type="submit"
          onClick={handleButtonClick}
          disabled={!history.length}
        >
          Очистить историю
        </button>
      </div>
    </section>
  );
}

export default History;
