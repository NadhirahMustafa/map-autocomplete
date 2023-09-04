export interface DataState {
  lat: number;
  lng: number;
}

export interface GetCoordinateAction {
  type: "SET_COORDINATE";
  payload: {
    lat: number;
    lng: number;
  };
}

export type CoordinateAction = GetCoordinateAction;
