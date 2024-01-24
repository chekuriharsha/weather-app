// https://api.openweathermap.org/data/2.5/weather?q=guntur&appid=a5002e332d3e8538dd89bde77b86d796
const apiKey = "a5002e332d3e8538dd89bde77b86d796";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const apiManish = 'https://api.weatherapi.com/v1/current.json?key=41288bcd03f743bfab4225439231704&q=';
let inp = document.querySelector('.input1');
async function Checking() {

    var city = inp.value;
    if (!city) {
        alert('Enter City');
    }
    else {
        const response = await fetch(apiUrl + `q=${city}` + `&appid=${apiKey}`);
        const res = await fetch(apiManish + `${city}`);
        var data = await response.json();
        var data1 = await res.json();
        if (data.cod === '404') {
            alert("No Such City Exist");
        }
        else {
            document.getElementById('time').innerText = `Date & Time: ${data1.location.localtime}`;
            document.getElementById('humidity').innerText = `${data.main.humidity} %`;
            document.getElementById('temp').innerHTML = `${data.main.temp} <sup>o</sup>C`;
            document.getElementById('wind').innerText = `${data.wind.speed} kmph`;
            document.getElementById('cond').innerText = `${data.weather[0].main}`;
            document.getElementById('state').innerText = `${data1.location.region}`;
            document.getElementById('country').innerText = `${data1.location.country}`;
        }
    }

}