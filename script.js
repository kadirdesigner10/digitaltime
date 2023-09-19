const days = document.querySelector('.day');
const mts = document.querySelector('.mts');
const years = document.querySelector('.years')
const months = document.querySelectorAll('.months');
const weekdays = document.querySelectorAll('.days');
const hours = document.querySelector('.h');
const minutes = document.querySelector('.m');
const seconds = document.querySelector('.s');
const ampm = document.querySelector('.ampm')
const mindots1 = document.querySelectorAll('.dots')[0];
const mindots2 = document.querySelectorAll('.dots')[1];
// ------------------- time functions ---------------------
function time () {
    let _hours = new Date().getHours();
    let _minutes = new Date().getMinutes();
   let _seconds = new Date().getSeconds();
   _hours >= 12 ? ampm.innerHTML = 'pm' : ampm.innerHTML = 'AM'
   if (_hours > 12) _hours-= 12;
   else _hours;
     hours.innerHTML = _hours < 10 ? '0'+ _hours : _hours;
    seconds.innerHTML = _seconds < 10 ? '0'+ _seconds : _seconds;
    minutes.innerHTML = _minutes < 10 ? '0'+ _minutes : _minutes;

}
setInterval(time,1000)

// ----------------- time dots blinking ----------------
function dots () {
    mindots1.classList.toggle('dots')
    mindots2.classList.toggle('dots')
}
setInterval(dots,1000)
// ---------------------date function ...................
function datesCall () {
    let _days = new Date().getDate();
days.innerHTML = _days < 10 ? '0'+ _days : _days;
let _mts = new Date().getMonth();
mts.innerHTML = _mts < 10 ? '0'+ _mts : _mts;
years.innerHTML = new Date().getFullYear();
}
setInterval(datesCall,1000)


// --------------------- months decoration
function monthsCall () {
    const _months = new Date().getMonth()+1;
    const _weeks = new Date().getUTCDay()-1;
    months[_months].classList.add('curr_months');   
    weekdays[_weeks].classList.add('curr_months')
}
monthsCall();

