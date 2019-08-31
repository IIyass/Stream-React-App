import {CombineReducers, combineReducers} from 'redux';
import {reducer} from 'redux-form';
import Authreducer from './Authreducer';
import StreamReducers from './StreamReducer';

export default combineReducers({
    auth:Authreducer,
    form:reducer,
    streams: StreamReducers
});