import { DataState, CoordinateAction } from "../interface/setDataLocation.interface";

const initialState: DataState = {
  lat: 0,
  lng: 0
};

export const dataReducer = (state = initialState, action: CoordinateAction): DataState => {
  switch (action.type) {
    case "SET_COORDINATE":
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng
      };
    default:
      return state;
  }
};