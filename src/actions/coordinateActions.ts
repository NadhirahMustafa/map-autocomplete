import { SetCoordinateInterface } from "../interface/interface";
import { GetCoordinateAction } from "../interface/setDataLocation.interface";

export const setLocationName = (data: SetCoordinateInterface): GetCoordinateAction => ({
    type: "SET_COORDINATE",
    payload: data,
  });