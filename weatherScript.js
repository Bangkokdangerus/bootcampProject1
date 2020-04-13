// BangkokDangerus- scrapped all NYT code in favor of simple ajax to get api working will build URL builder next 

new function() {
  
  

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=67f7b70a57885cc5e9a93ac4280e436f",
      }).done(function(theWeather) {
        var data = theWeather;
       
        document.getElementById("result").innerHTML= data.name;
        document.getElementById("resultWeather").innerHTML= data.weather[0].description;
        document.getElementById("resultMain").innerHTML= data.main.temp;
        document.getElementById("resultWind").innerHTML= data.wind.speed;
        console.log(data);
      });
}