
function weatherBalloon() {
    var cityName=document.getElementById("cityname").value;
    const apiKey = "YOUR API KEY";
    const units = "metric";
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units="+units+"&appid="+apiKey)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        var description = data.weather[0].description;
        var celcius = data.main.temp;
        var imgurl = data.weather[0].icon;
        
        document.getElementById('description').innerHTML = description;
	      document.getElementById('temp').innerHTML = celcius + '&deg;';
	      document.getElementById('location').innerHTML = data.name;
        document.getElementById('icon').src="http://openweathermap.org/img/wn/"+imgurl+"@2x.png";

      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }