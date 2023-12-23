document.getElementById('search').addEventListener('click', function () {
    let input_place = document.getElementById('location').value;
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input_place}`)
        .then(res => res.json())
        .then(data => {
            let latitude = data.results[0].latitude;
            let longitude = data.results[0].longitude;
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                .then(res => res.json())
                .then(weather_data => {
                    let temperature = weather_data.current_weather.temperature;
                    let weather_code = weather_data.current_weather.weathercode;
                    document.getElementById('temperature').innerText = `Temperature: ${temperature}`;
                    document.getElementById('place').innerText = `Location: ${input_place}`;
                    let weather = document.getElementById('weather');
                    weather.style.width = "500px";
                    weather.style.height = "700px";
                    weather.style.backgroundSize = `${weather.offsetWidth}px ${weather.offsetHeight}px`; // Set background image size to match weather element dimensions
                    weather.style.borderRadius = "50px";
                    weather.style.textAlign = "center";
                    weather.style.color = "white";
                    weather.style.display = "grid";
                    weather.style.placeItems = "center";
                    if (weather_code <= 3) {
                        weather.style.backgroundImage = "url('https://media3.giphy.com/media/HvYdoLbPqSdNu/giphy.gif')";
                    } else if (weather_code >= 48 && weather_code <= 67) {
                        weather.style.backgroundImage = "url('https://i.pinimg.com/originals/4d/06/8f/4d068f4a98aba7a356e14637c23fb3fe.gif')";
                    } else if (weather_code >= 71 && weather_code <= 86) {
                        weather.style.backgroundImage = "url('https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/PHOTO-2017%20Winter%20Outlook_Through%20the%20snowstorm-iStock-641688354-1125x534-Landscape.jpg')";
                    } else if (weather_code >= 95 && weather_code <= 99) {
                        weather.style.backgroundImage = "url('https://i.pinimg.com/originals/79/d3/5c/79d35c09f1210a3edbb7bf0d51691cef.gif')";
                    }
                    weather.style.backgroundSize = "cover";
                });
        });
});