export interface getMapInterface {
  predictions: [];
  status: string;
}

export interface SetCoordinateInterface {
  lat: number;
  lng: number
}

export interface StoreDataProps {
  addSearchResult: (result: any) => void;
  storeSearchQuery: (query: string) => void;
}

export interface DisplayHistoryProps {
  queries: string[];
}