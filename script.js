       $.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=31ec7260bd9cc0d8d1bf3b02223d7981&units=metric', function(data) {
           const $icon = data.list[0].weather.icon;
           const $weather = data.list[0].weather.main;
           const $cTemp = data.list[0].main.temp;
           const $maxTemp = data.list[0].main.temp_max;
           const $minTemp = data.list[0].main.temp_min;

           $('.icon').append($icon);
           $('.weather').append($weather);
           $('.ctemp').append($cTemp);
           $('.hightemp').append($maxTemp);
           $('.lowtemp').append($minTemp);
         });