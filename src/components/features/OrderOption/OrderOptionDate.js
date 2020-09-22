import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
 

 
class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };
 
  handleChange = date => {
    this.setState({
      startDate: date,
    });
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
export default OrderOptionDate;