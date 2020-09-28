import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
 

 
class OrderOptionDate extends React.Component {

  render() {
    const {setOptionValue, currentValue} = this.props;
    return (
      <DatePicker
        className={styles.input}
        selected={currentValue}
        onChange={setOptionValue}
      />
    );
  }
}
OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionDate;