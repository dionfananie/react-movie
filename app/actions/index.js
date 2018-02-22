import axios from 'axios';

// ACTIONS LIST MOVIES
export function getListMovies() {
    // console.log('connect into actions');
    const req = axios.get('http://api.tvmaze.com/shows')
        .then(res =>{
            // console.log('data: ',res.data.slice(0,5))
            return res.data.slice(0,15)
        } );
    return{
        type:'GET_LIST_MOVIES',
        payload: req
    }
}
// ACTIONS DETAIL MOVIES
export function getDetailMovies(id) {
    const req = axios.get(`http://api.tvmaze.com/shows/${id}`)
        .then(res=>{
            // console.log('detailMovies: ', res.data);
            return res.data
        });
    return{
        type:'GET_DETAIL_MOVIES',
        payload: req
    }
}

export function clearSelectedMovies() {
    return {
        type: 'ClEAR_SELECTED_MOVIES',
        payload: []
    }
}