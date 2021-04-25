 const deg = 6;
      const hr = document.querySelector('#hr');
      const mn = document.querySelector('#mn');
      const sc = document.querySelector('#sc');

      setInterval(() => {

        let day = new Date(); //Analog Clock
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;

        let d_hh = day.getHours(); //Digital Clock
        let d_mm = day.getMinutes();
        let d_ss = day.getSeconds();

        if (d_hh >= 12 && d_hh < 24) {
          document.getElementById('ampm').innerHTML = "PM";
        }

        if (d_hh > 12) {
          d_hh -= 12;
        }


        if (d_hh < 10) {
          document.getElementById('hour').innerHTML = "0" + d_hh;
        } else {
          document.getElementById('hour').innerHTML = d_hh;
        }
        if (d_mm < 10) {
          document.getElementById('min').innerHTML = "0" + d_mm;
        } else {
          document.getElementById('min').innerHTML = d_mm;
        }
        if (d_ss < 10) {
          document.getElementById('sec').innerHTML = "0" + d_ss;
        } else {
          document.getElementById('sec').innerHTML = d_ss;
        }

        let d_yy = day.getFullYear(); //Digital Clock Date
        let d_mh = day.getMonth();
        let d_tt = day.getDate();
        let d_dd = day.getDay();

        document.getElementById('year').innerHTML = d_yy;
        switch (d_mh + 1) {
          case 1:
            document.getElementById('month').innerHTML = "January";
            break;
          case 2:
            document.getElementById('month').innerHTML = "Febuary";
            break;
          case 3:
            document.getElementById('month').innerHTML = "March";
            break;
          case 4:
            document.getElementById('month').innerHTML = "Apirl";
            break;
          case 5:
            document.getElementById('month').innerHTML = "May";
            break;
          case 6:
            document.getElementById('month').innerHTML = "June";
            break;
          case 7:
            document.getElementById('month').innerHTML = "July";
            break;
          case 8:
            document.getElementById('month').innerHTML = "Agust";
            break;
          case 9:
            document.getElementById('month').innerHTML = "September";
            break;
          case 10:
            document.getElementById('month').innerHTML = "October";
            break;
          case 11:
            document.getElementById('month').innerHTML = "November";
            break;
          case 12:
            document.getElementById('month').innerHTML = "December";
            break;
        }
        document.getElementById('date').innerHTML = d_tt;
        switch (d_dd) {
          case 1:
            document.getElementById('day').innerHTML = "Monday";
            break;
          case 2:
            document.getElementById('day').innerHTML = "Tuesday";
            break;
          case 3:
            document.getElementById('day').innerHTML = "Wednesday";
            break;
          case 4:
            document.getElementById('day').innerHTML = "Thursday";
            break;
          case 5:
            document.getElementById('dayh').innerHTML = "Friday";
            break;
          case 6:
            document.getElementById('day').innerHTML = "Saturday";
            break;
          case 0:
            document.getElementById('day').innerHTML = "Sunday";
            break;
        }
      })