let secondArrow = document.querySelector(".s"),
  minuteArrow = document.querySelector(".m"),
  hourArrow = document.querySelector(".h"),
  hourNumber = document.querySelector(".hours"),
  minuteNumber = document.querySelector(".minutes");

function clock() {
  let time = new Date(),
    seconds = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

  secondArrow.style = `transform: rotate(${seconds}deg)`;
  minuteArrow.style = `transform: rotate(${minutes}deg)`;
  hourArrow.style = `transform: rotate(${hours}deg)`;

  hourNumber.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minuteNumber.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

  setTimeout(() => clock(), 1000);
}

clock();

// Рекурсия это когда функция вызывает саму себя
// setTimeout() - позволяет выполнять действия с задержкой

// let i = 0;

// function rek() {
//     if(i < 100) {
//         console.log(i);
//         i++
//        setTimeout(() => rek(),1000)
//     }

// }
// rek()

let links = document.querySelectorAll(".tabsItem");
let tabs = document.querySelectorAll(".tabsContentItem");

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    removeActive();
    link.classList.add("active");
    tabs[i].classList.add("active");
  });
});

function removeActive() {
  links.forEach((el, i) => {
    el.classList.remove("active");
    tabs[i].classList.remove("active");
  });
}

let stopwatch = document.querySelector(".stopwatch__hours");
let stopwatch__clock = document.querySelector(".stopwatch__minutes");
let stopwatch__clock_seconds = document.querySelector(".stopwatch__seconds");
let button1 = document.querySelector('.stopwatch__btn');
let secundomer = document.querySelector('.tabsLink__span');
 

button1.addEventListener('click', () => {
  if(button1.innerHTML == 'start') {
    button1.innerHTML = 'stop';
    secundomer.classList.add('active');
    rek();
  }else if(button1.innerHTML == 'stop') {
    button1.innerHTML = 'clear';
    secundomer.classList.add('active_clear');
    
  }else if(button1.innerHTML == 'clear')  {
    secundomer.classList.remove('active_clear');
    secundomer.classList.remove('active');
    button1.innerHTML = 'start';
    stopwatch__clock_seconds.innerHTML = 0;
    stopwatch__clock.innerHTML = 0 ;
    stopwatch.innerHTML = 0 ;
    sec= 0
  }
} )


let sec = 0;
function rek() {
  let secnd
  if(button1.innerHTML == 'clear') {
    clearTimeout(secnd);
  }else if(button1.innerHTML == 'stop'){
    stopwatch__clock_seconds.innerHTML = sec;
    sec++;
    console.log(sec);
     secnd = setTimeout(() => rek(), 1000);
    if (stopwatch__clock_seconds.innerHTML == 59) {
      stopwatch__clock.innerHTML++;
      sec = 0;
      if (stopwatch__clock.innerHTML == 60) {
        stopwatch.innerHTML++;
        stopwatch__clock.innerHTML = 0;
      }
    }
  }
  
}

