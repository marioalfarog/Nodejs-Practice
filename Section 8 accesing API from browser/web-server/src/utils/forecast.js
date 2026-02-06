// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
import request from "postman-request";

export const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current";
  const accessKey = "0b6e42519309144a3d8c8b9cafe3c28c";
  const city = latitude + "," + longitude;
  const uri = url + "?access_key=" + accessKey + "&query=" + city + "&units=m";

  request(
    {
      uri,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("unale to connect to weather service!");
      } else if (body.error) {
        callback("unable to find location!");
      } else {
        const { temperature, precip, weather_descriptions } = body.current;
        const weatherDescripcion = weather_descriptions[0];
        callback(
          undefined,
          weatherDescripcion +
            " It is currently " +
            temperature +
            " degrees out. there is a " +
            precip +
            "% chance of rain.",
        );
      }
    },
  );
};

export default { forecast };
