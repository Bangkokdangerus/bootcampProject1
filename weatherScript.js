// BangkokDangerus- scrapped all NYT code in favor of simple ajax to get api working will build URL builder next 


var finalLoc = "London,uk";
console.log(document.getElementById("result").innerHTML);

function loadLocation() {
  
    

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

      $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=fbIf1ckwS6OC3tiJr1DgcpOH3SHQcgT1&q=Rain&limit=1&offset=0&rating=G&lang=en",
      }).done(function(gifTest) {
        var gifData = gifTest;

        document.getElementById("weatherGif").src = gifData.data[0].url;
        console.log(gifData.data[0].url);
        
      });
    
}


this.loadLocation();