import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOption = ({name}) => (
  <div className={styles.component}>
    <h3 className={styles.component}>
      {name}
    </h3>
  </div>
);
OrderOption.propTypes = {
  options: PropTypes.any,
  name: PropTypes.string,

};
export default OrderOption;
