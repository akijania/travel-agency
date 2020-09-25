import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../../components/common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue}) => (
  <div className={styles.icons}>
    {required ? '' : (
      <div className={styles.icon} value=''  onClick={event => setOptionValue(event.currentTarget.value)}><Icon name='times-circle' />{'none'}</div>
    )}
    {values.map(value => (
      <div 
        className= {currentValue == value.id ? (styles.icon, styles.iconActive) : styles.icon }
        key={value.id} 
        id={value.id}
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
  currentValue: PropTypes.string,

};
export default OrderOptionIcons;