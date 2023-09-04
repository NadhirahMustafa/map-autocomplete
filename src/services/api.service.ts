import { getMapInterface } from "../interface/interface";

export const getLocationAutocomplete = (value: string) => {
  return new Promise<getMapInterface>((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=${process.env.REACT_APP_API_KEY}`,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};