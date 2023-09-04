import { combineReducers } from 'redux';
import { dataReducer } from './dataLocationReducer';

const rootReducer = combineReducers({
  locationData: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
