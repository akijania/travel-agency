import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input type='text' className={styles.input} onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);
OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,

};
export default OrderOptionText;