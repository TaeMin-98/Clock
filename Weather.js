       $.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=31ec7260bd9cc0d8d1bf3b02223d7981&units=metric', function(data) {
         const weather = data.list[0].weather[0].main;
         const cTemp = data.list[0].main.temp;
         const maxTemp = data.list[0].main.temp_max;
         const minTemp = data.list[0].main.temp_min;

         $('.weather').append(weather);
         $('.ctemp').prepend(Math.floor(cTemp));
         $('.hightemp').prepend(Math.floor(maxTemp));
         $('.lowtemp').prepend(Math.floor(minTemp));

         switch (weather) {
           case 'Rain':
             document.querySelector('.icon').innerHTML = '<img src="img/Rain.png" width = 125px height = 125px/>';
             break;

           case 'Clear':
             document.querySelector('.icon').innerHTML = '<img src="img/Clear.png" width = 125px height = 125px/>';
             break;

           case 'Clouds':
             document.querySelector('.icon').innerHTML = '<img src="img/Clouds.png" width = 125px height = 125px/>';
             break;

           case 'Snow':
             document.querySelector('.icon').innerHTML = '<img src="img/Snow.png" width = 125px height = 125px/>';
             break;

           case 'Thunderstorm':
             document.querySelector('.icon').innerHTML = '<img src="img/Thunderstorm.png" width = 125px height = 125px/>';
             break;

           case 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall':
             document.querySelector('.icon').innerHTML = '<img src="img/Clear.png" width = 125px height = 125px/>';
             break;

         }
       });
