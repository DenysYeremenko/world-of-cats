import { combineReducers } from 'redux';
import { votingViewSlice } from '../votingView/votingViewSlice';
import { sharedLayoutSlice } from '../sharedLayout/sharedLayoutSlice';
import { catApi } from '../../services/catApi';

const rootReducer = combineReducers({
  [votingViewSlice.name]: votingViewSlice.reducer,
  [sharedLayoutSlice.name]: sharedLayoutSlice.reducer,
  [catApi.reducerPath]: catApi.reducer,
});

export default rootReducer;
