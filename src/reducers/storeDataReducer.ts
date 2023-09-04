// src/store/reducers/searchReducer.ts
import { ActionTypes } from '../actions/storeDataActions';
import { getMapInterface } from '../interface/interface';

interface SearchState {
  results: getMapInterface[];
  queries: string[];
}

const initialState: SearchState = {
  results: [],
  queries: [],
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_SEARCH_RESULT:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    case ActionTypes.STORE_SEARCH_QUERY:
      return {
        ...state,
        queries: [...state.queries, action.payload],
      };
    default:
      return state;
  }
};

export default searchReducer;
