import { combineReducers } from 'redux';
import listMovies from './list_movies_reducer';
import detailMovies from './detail_movies_reducer';


const rootReducers = combineReducers({
    listMovies,
    detailMovies
});

export default rootReducers;