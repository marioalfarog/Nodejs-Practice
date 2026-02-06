import request from "postman-request";

export const geocode = (address, callback) => {
  const urlGeo = "http://api.positionstack.com/v1/forward";
  const accessKeyGeo = "c6261054d5330efe4a34017f56a62abe";
  const uri = urlGeo + "?access_key=" + accessKeyGeo + "&query=" + address;

  request(
    {
      uri,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("unale to connect to geolocation service!");
      } else if (body.error) {
        callback("unable to find location try with another location!");
      } else {
        const { name: location, latitude, longitude } = body.data[0];
        callback(undefined, { location , latitude, longitude });
      }
    },
  );
};

export default { geocode };
