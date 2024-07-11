
function timeNow(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let timeFormat = 'PM'
    
    if(hour > 12){
        hour = hour -12;
        timeFormat = 'AM'
    }
    if(hour < 10){
        hour = '0' + hour;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    
    let finalTime = `${hour} : ${min} : ${sec}`;
    document.querySelector('#time').innerHTML=finalTime;
    document.querySelector('small').innerHTML=timeFormat;
    setInterval(timeNow,1000)
}
timeNow()



