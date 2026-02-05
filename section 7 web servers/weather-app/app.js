import { geocode } from "./utils/geocode.js";
import { forecast } from "./utils/forecast.js";

const cityGeo = process.argv[2];

if (cityGeo) {
  geocode(cityGeo, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      console.log("Error", error);
    } else {
      forecast(latitude, longitude, (error, data) => {
        if (error) {
          console.log("Error", error);
        } else {
          console.log("The weather in " + location + " is: " + data);
        }
      });
    }
  });
} else {
  console.log("please provide and address.");
}
