import { combineReducers } from 'redux';
import { dataReducer } from './dataLocationReducer';
import searchReducer from './storeDataReducer';

const rootReducer = combineReducers({
  locationData: dataReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
