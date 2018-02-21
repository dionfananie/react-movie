export default function (state={},actions) {
    switch (actions.type) {
        case 'GET_LIST_MOVIES':
            console.log('connect to reducers');
            return{...state, list:actions.payload}
    
        default:
            return state;
    }
}