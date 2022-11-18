// analog variables
const hour = document.querySelector(".hr"),
  minute = document.querySelector(".min"),
  second = document.querySelector(".sec"),
  deg = 6;

// digital variables
const digit = document.querySelector("#digi-clock"),
  digitDate = document.querySelector(".date");

const analogClock = setInterval(() => {
  let time = new Date();
  let hh = time.getHours() * 30;
  let mm = time.getMinutes() * deg;
  let ss = time.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;
});

const digitalClockAndDate = setInterval(() => {
  let timeAndDate = new Date();
  let hh = timeAndDate.getHours();
  let mm = timeAndDate.getMinutes();
  let ss = timeAndDate.getSeconds();
  let date = timeAndDate.getDate();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let currentTime = `${hh}:${mm}:${ss}`;

  digit.innerHTML = currentTime;

  digitDate.innerHTML = date;
});
