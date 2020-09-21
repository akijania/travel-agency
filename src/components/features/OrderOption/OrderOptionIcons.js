import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../../components/common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div className={styles.icon} value=''  onClick={event => setOptionValue(event.currentTarget.value)}><Icon name='times-circle' />{'none'}</div>
    )}
    {values.map(value => (
      <div 
        className= {styles.icon}
        // activeClassName={styles.iconActive}
        key={value.id} 
        // value={currentValue}
        onClick={event => setOptionValue(value.id, event.currentTarget.value)}>
        <Icon name={value.icon} />
        {value.name} 
        ({formatPrice(value.price)})
      </div>
    ))}
    
  </div>
);
OrderOptionIcons.propTypes = {
  values: PropTypes.any,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,

};
export default OrderOptionIcons;