export const formatTime = time => {
  if (typeof(time) != 'number' || time < 0){
    return null;
  } else{
    let output = ((time%60)< 10 ? '0' : '') + time%60;
    if(time >= 60) {
      output = ((Math.floor(time/60)%60)< 10 ? '0' : '') +  Math.floor(time/60)%60 + ':' + output;
    }
    if(time >= 60*60) {
      output = ((Math.floor(time/(60*60))%60)< 10 ? '0' : '') +  Math.floor(time/(60*60)) + ':' + output;
    }
    if(time<60*60) {
      output = '00:' + output;
    }
    if(time<60) {
      output = '00:' + output;
    }
    return output;
  }  
};