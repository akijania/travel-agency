import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = ({currentValue, setOptionValue, limits}) => (
  <div className={styles.number}>
    <input type='number' className={styles.inputSmall} value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);
OrderOptionNumber.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  limits: PropTypes.any,

};
export default OrderOptionNumber;