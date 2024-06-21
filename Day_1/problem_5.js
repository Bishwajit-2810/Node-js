const api=''
const city="Dhaka"
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
  .then(response => response.json())
  .then(data => {
    
    console.log(data.coord);
    console.log(data.weather[0]);
    console.log(data.main);

   
  })
  .catch(error => {
    console.error(error);
  });
 
 
