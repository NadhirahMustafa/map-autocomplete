import { getMapInterface } from "../interface/interface";

export const getLocationAutocomplete = (value: string) => {
  return new Promise<getMapInterface>((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=AIzaSyByWSitr2Qx78TxIQ11wdYfiPBdj_5rT0A`,
      { mode: "cors" }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("res: ", res);
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};