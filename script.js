const currentMonth = document.querySelector("#current-month");
const currentYear = document.querySelector("#current-year");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span")

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

// console.log(date, currYear, currMonth);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); //getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); //getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of prev month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++){
        liTag += `<li class="inactive">${i - lastDayofMonth+1}</li>`;
    }

    let li_list = liTag.split('<li');
    let new_li_list = [];
    for (let i = 0; i < li_list.length; i++) {
        if (i === 0) {
            new_li_list.push(li_list[i]);
            continue;
        }
        if ((i-1) % 7 === 0 || i % 7 === 0) {
            if (li_list[i].includes('class="inactive"')){
                new_li_list.push('<li class="days-weekend inactive"' + li_list[i].replace("inactive", ""));
            }
            else{
                new_li_list.push('<li class="days-weekend"' + li_list[i]);
            }
        } else {
            new_li_list.push('<li' + li_list[i]);
        }
    }

    let new_liTag = new_li_list.join('');
    console.log(new_liTag);

    console.log(liTag)

    currentMonth.innerText = `${months[currMonth]}`;
    currentYear.innerText =`${currYear}`;
    daysTag.innerHTML = new_liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1: currMonth + 1;

        if (currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear=date.getFullYear();
            currMonth = date.getMonth();
            date=new Date();
        }
        renderCalendar();
    })
})