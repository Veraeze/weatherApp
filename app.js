    
        const apikey = "d1e2a840c7ebb0cb736897b5cee81f13";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
        const searchBox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")
        const weatherIcon = document.querySelector(".weather-icon")

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apikey}`);
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
            let weatherCondition = data.weather[0].main.toLowerCase();
                weatherIcon.src = `assets/images/${weatherCondition}.png`;
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
