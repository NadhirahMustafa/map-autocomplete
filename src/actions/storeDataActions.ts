export const ActionTypes = {
    ADD_SEARCH_RESULT: 'ADD_SEARCH_RESULT',
    STORE_SEARCH_QUERY: 'STORE_SEARCH_QUERY',
  };
  
  export const addSearchResult = (result: any) => ({
    type: ActionTypes.ADD_SEARCH_RESULT,
    payload: result,
  });
  
  export const storeSearchQuery = (query: string) => ({
    type: ActionTypes.STORE_SEARCH_QUERY,
    payload: query,
  });