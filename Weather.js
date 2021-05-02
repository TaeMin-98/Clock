       $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=31ec7260bd9cc0d8d1bf3b02223d7981&units=metric', function(data) {
         const weather = data.weather[0].main;
         const cTemp = data.main.temp;
         const maxTemp = data.main.temp_max;
         const minTemp = data.main.temp_min;
         const cityName = data.name;
         
         $('#City').append(cityName);
         $('#City2').append(cityName);
         $('.ctemp').prepend(Math.round(cTemp));
         $('.hightemp').prepend(Math.round(maxTemp));
         $('.lowtemp').prepend(Math.round(minTemp));

         

         switch (weather) {
           case 'Rain':
             document.querySelector('.icon').innerHTML = '<img src="img/Rain.png" width = 120px height = 120px/>';
             break;

           case 'Clear':
             document.querySelector('.icon').innerHTML = '<img src="img/Clear.png" width = 120px height = 120px/>';
             break;

           case 'Clouds':
             document.querySelector('.icon').innerHTML = '<img src="img/Clouds.png" width = 120px height = 120px/>';
             break;

           case 'Snow':
             document.querySelector('.icon').innerHTML = '<img src="img/Snow.png" width = 120px height = 120px/>';
             break;

           case 'Thunderstorm':
             document.querySelector('.icon').innerHTML = '<img src="img/Thunderstorm.png" width = 120px height = 120px/>';
             break;

           case 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall':
             document.querySelector('.icon').innerHTML = '<img src="img/Clear.png" width = 120px height = 120px/>';
             break;
         }
       });
