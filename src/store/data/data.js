import { createReducer } from '@reduxjs/toolkit';
import { addHistory, addRates, clearHistory } from '../actions';

const MAX_HISTORY_LENGTH = 10;

const initialState = {
  rates: {
    RUB: 72.9215,
    USD: 1,
    EUR: 0.8634,
    GBP: 0.7428,
    CNY: 6.4467,
  },
  history: [],
};

const data = createReducer(initialState, {
  [addHistory]: (state, { payload }) => {
    state.history.unshift(payload);

    if (state.history.length > MAX_HISTORY_LENGTH) {
      state.history.pop();
    }
  },

  [addRates]: (state, { payload }) => {
    state.rates = payload;
  },

  [clearHistory]: (state) => {
    state.history = [];
  },
});

export { data };
