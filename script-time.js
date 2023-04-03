const currentTime = () => {
    const element = document.querySelector (".t1-time-h1") ;
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    // make 12-hour clock
    let day;
    day = hours < 12? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours == 0? (hours = 12) : hours;
    //add 0 if value is less than 10
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    element.textContent = `${hours}:${minutes}:${seconds} ${day}`;
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months_time = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

date = new Date();
const dayOfWeek = daysOfWeek[date.getDay()];
const dayOfMonth = date.getDate();
const month = months_time[date.getMonth()];
const year = date.getFullYear();

const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
const current_date = document.querySelector(".t1-date-h1");
current_date.textContent = formattedDate;


currentTime();
setInterval (currentTime, 1000);