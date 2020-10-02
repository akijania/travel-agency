export const formatTime = time => {
  if (typeof(time) != 'number' || time < 0){
    return null;
  } 
  const ONE_SECOND = 1;
  const ONE_MINUTE_IN_SECONDS = 60;
  const ONE_HOUR_IN_SECONDS = 60*60;
  const getPart = (time, partTime) => ((Math.floor(time/partTime)%60)< 10 ? '0' : '') +  Math.floor(time/partTime)%60;

  let seconds = getPart(time, ONE_SECOND);
  let minutes = '00';
  let hours = '00';
  if (time >= ONE_MINUTE_IN_SECONDS) {
    minutes = getPart(time, ONE_MINUTE_IN_SECONDS);
  }
  if (time >= ONE_HOUR_IN_SECONDS) {
    hours = getPart(time, ONE_HOUR_IN_SECONDS);
  }
  return `${hours}:${minutes}:${seconds}`;
};  
