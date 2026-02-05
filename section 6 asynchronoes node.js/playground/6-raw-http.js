import { request } from "http";

const uri = "http://api.weatherstack.com/current";
const accessKey = "0b6e42519309144a3d8c8b9cafe3c28c";
const city = "-34.83346,-56.16735";
const url = uri + "?access_key=" + accessKey + "&query=" + city + "&units=m";

const requestNew = request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

requestNew.on("error", (error) => {
  console.log(error);
});

requestNew.end();
