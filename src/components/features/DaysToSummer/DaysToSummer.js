import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getCountdownTime() {
    const currentTime = new Date();
    let currentYear = currentTime.getUTCFullYear();
    if (
      currentTime.getMonth() > 5 ||
      (currentTime.getMonth() == 5 && currentTime.getDate() > 21)
    ) {
      currentYear = currentYear + 1;
    }
    let nextSummer = new Date(Date.UTC(currentYear,5,21,0,0,1,0 ));
    const difference = Math.ceil(nextSummer.getTime() - currentTime.getTime());
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (days == 1) {
      return '1 day to summer!';
    } else if (days > 272) {
      return '';
    } else {
      return days + ' days to summer!';
    }
  }
  render() {
    const countdownTime = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{countdownTime}</h3>
      </div>
    );
  }
}

export default DaysToSummer;
