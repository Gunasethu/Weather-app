var inputValue = document.querySelector('.input');
var searchBtn = document.querySelector('.searchBtn');
var place = document.getElementById('place')
var icons = document.querySelector('.weather-icon')
var countrys = document.querySelector('.countrys');
var desc = document.querySelector('.desc');
var degree = document.querySelector('.deg');
var speeds = document.querySelector('.speed');
var temp = document.querySelector('.temp');
var max = document.querySelector('.max');
var min = document.querySelector('.min');


var placeName = "";
var countryName = "";
var deg = "";
var speed = "";
var temperature = "";
var maxtemp = "";
var mintemp = "";

function getdata() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=metric&appid=775b3c95f17f3146ba3028448357d9fd')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            var placeName = data.name;

            var countryName = data.sys.country;


            var icon = data.weather[0].icon;
            icons.innerHTML = ` <img src="http://openweathermap.org/img/wn/${icon}@2x.png" />`;

            var description = data.weather[0].description;


            var deg = data.wind.deg;


            var speed = data.wind.speed;

            var temperature = data.main.temp


            var maxtemp = data.main.temp_max;
            var mintemp = data.main.temp_min;

            place.innerText = ` ${placeName} ,`;
            countrys.innerText = countryName;
            desc.innerText = description;
            degree.innerText = deg;
            speeds.innerText = Math.round(speed);
            temp.innerText = Math.round(`${temperature}`) + '°C';
            max.innerText = Math.round(`${maxtemp}`) + '°C';
            min.innerText = Math.round(`${mintemp} `) + '°C';
        })
        .catch(error => console.error('error'))
};

// dark mode button




function darkMode() {
    var body = document.body;
    var main = document.getElementById('main');
    var temp = document.querySelector('.temp');
    body.classList.toggle('dark_mode');
    main.classList.toggle('dark_mode-bg');
    temp.classList.toggle('dark_mode-text');
}

// day 

document.getElementById("para1").innerHTML = showDate();

function showDate() {
    var d = new Date()
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
}
