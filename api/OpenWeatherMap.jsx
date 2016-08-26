var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=';
const OPEN_WEATHER_MAP_API_KEY = 'c4970715dc83f270557d79e62d260452';

module.exports = {
   getTemp: function(location) {
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}${OPEN_WEATHER_MAP_API_KEY}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function(res) {
         if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
         } else {
            return res.data.main.temp;
         }
      },function(res) {
         throw new Error(res.data.message);
      });
   }
}
