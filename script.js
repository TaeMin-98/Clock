       $.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=31ec7260bd9cc0d8d1bf3b02223d7981&units=metric', function(data) {
         const weather = data.list[0].weather[0].main;
         const cTemp = data.list[0].main.temp;
         const maxTemp = data.list[0].main.temp_max;
         const minTemp = data.list[0].main.temp_min;

         $('.weather').append(weather);
         $('.ctemp').append(cTemp);
         $('.hightemp').append(maxTemp);
         $('.lowtemp').append(minTemp);

         switch (weather) {
           case 'Rain':
             document.querySelector('.icon').innerHTML = '<img src="img/Rain.png" width = 100px height = 100px/>';
             break;

           case 'Clear':
             document.querySelector('.icon').innerHTML = '<img src="Clear.png">';
             break;

           case 'Clouds':
             document.querySelector('.icon').innerHTML = '<img src="Clouds.png">';
             break;

           case 'Snow':
             document.querySelector('.icon').innerHTML = '<img src="Snow.png">';
             break;

           case 'Thunderstorm':
             document.querySelector('.icon').innerHTML = '<img src="Thunderstorm.png">';
             break;

           case 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Ash', 'Squall':
             document.querySelector('.icon').innerHTML = '<img src="Clear.png">';
             break;

         }
       });
