const search = async()=>{
    let weatherupdate = city_name.value
    console.log(weatherupdate);
    if(weatherupdate){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherupdate}&appid=1c3c074f848dabe12d6fe739e4928cf4`)
         response.json().then((data)=>{console.log(data);
        
             let cname = data.name
             console.log(cname);

             let cwind = data.wind.speed
             console.log(cwind);

            let ctemp = data.main.temp-273.15
            let temp = ctemp.toFixed(0)
            console.log(temp);

            let feel = data.main.feels_like-273.15
            let cfeel = feel.toFixed(0) 
            console.log(cfeel);

            let chumi = data.main.humidity
            console.log(chumi);

            let cpressure = data.main.pressure
            console.log(cpressure);

            let coun = data.sys.country
            console.log(coun);

            let ctime = data.timezone
            console.log(ctime);

            let cloud = data.clouds.all
            console.log(cloud);

            let cdes = data.weather[0].main
            console.log(cdes);

            let cicon = data.weather[0].icon
            console.log(cicon);
            
            var date = Date()
            console.log(date);


            result.innerHTML = `<div class="weather-app">
            <div class="container">
                <h3 class="brand ms-5 mt-5 fs-1">Weather Update</h3>
                <div class="ms-5 mb-5">
                    <h1 class="temp">${temp}&deg;C</h1>
                    <div class="city-name">
                        <h1 class="name">${cname}</h1>
                        <small>
                            <span class="time">${date}</span>
                        </small>
                    </div>
                    <div class="weather">
                        <img src="https://openweathermap.org/img/w/${cicon}.png" class="icon" width="50" height="50" alt="icon">
                        <span class="condition">${cdes}</span>
                    </div>
                </div>
            </div>
            <div class="panel">
                <form id="locationInput">
                    <input id="city-name" type="text" class="search" placeholder="Search Location...">
                    <button onclick="search()" type="submit" class="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <ul class="details">
                    <h4>Weather Details</h4>
                    <li>
                        <span>Country</span>
                        <span class="cloud">${coun}</span>
                    </li>
    
                    <li>
                        <span>Cloudy</span>
                        <span class="cloud">${cloud}%</span>
                    </li>
                    <li>
                        <span>Humidity</span>
                        <span class="humidity">${chumi}%</span>
                    </li>
                    <li>
                        <span>Wind</span>
                        <span class="wind">${cwind}km/h</span>
                    </li>
                    <li>
                        <span>Pressure</span>
                        <span class="pressure">${cpressure}mbar</span>
                    </li>
                    <li>
                        <span>Time Zone</span>
                        <span class="time">${date}</span>
                    </li>
                    <li>
                        <span>Feels like</span>
                        <span class="feel">${cfeel}&deg;</span>
                    </li>
                </ul>
            </div>
        </div>`
          }) 
    }
    else{
        alert('Enter a valid input')
    }
}


