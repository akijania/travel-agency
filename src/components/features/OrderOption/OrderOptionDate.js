import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
 

 
class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };
 
  handleChange = (date) => {
    this.setState({
      startDate: date,
    }); 
    this.props.setOptionValue(date);
  };
 
  render() {
    return (
      <DatePicker
        className={styles.input}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;