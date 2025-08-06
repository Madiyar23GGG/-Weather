let input = document.getElementById('input');
let h_1 = document.getElementById('h_1');
let button = document.getElementById('button');
let h2 = document.getElementById('h2');
let dat = document.getElementById('dat');
let img2 = document.getElementById('img2');
let h3 = document.getElementById('h3');
let h5 = document.getElementById('h5');
let h6 = document.getElementById('h6');
let h7 = document.getElementById('h7');
let h8 = document.getElementById('h8')


button.addEventListener('click',function(){
    let cities = input.value
    fetch(`https://api.weatherapi.com/v1/current.json?key=0a447dc803d64e249b192310252903&q=${cities}&aqi=no`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        h_1.textContent = cities
        h2.textContent = data.current.temp_c+" Oc"
        dat.textContent = data.current.last_updated
        h3.textContent = "Description:" +data.current.condition.text
        img2.src = "https:" + data.current.condition.icon
        h5.textContent =   "Real Feel:" + data.current.feelslike_f
        h6.textContent = "Wind: N-E,"+data.current.wind_kph
        h7.textContent = "Pressure:"+data.current.pressure_in+"MB"
        h8.textContent = "Humidity"+ data.current.humidity+"%"
    })
})





















