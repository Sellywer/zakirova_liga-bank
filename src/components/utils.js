export const WEEK = 7;

export const MIN_VALUE = '0';

export const MAX_LENGTH = 10;

export const USD = 'USD';

export const RUB = 'RUB';

const FIX = 4;

export const BACKEND_URL = 'https://openexchangerates.org/api/historical';

export const APP_ID = '.json?app_id=d3e503d72f284685b5d0c042551877ab';

export const LabelValues = {
  FROM: 'У меня есть',
  TO: 'Хочу приобрести',
};

export const getFormattedValue = (value) =>  value.toFixed(FIX).replace(/\.0+$/, '');

