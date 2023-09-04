import Geocode from "react-geocode";
import { connect } from "react-redux";

const getCoordinate = (address: string) => {
  return new Promise((resolve, reject) => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        resolve({lat: lat, lng: lng})
      },
      (error) => {
        console.error(error);
        reject(error);
      }
    );
  });
};

export default getCoordinate