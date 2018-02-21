export default function (state = {}, actions) {
    switch (actions.type) {
        case 'GET_DETAIL_MOVIES':
            console.log('connect to detail movies reducers');
            return { ...state, list: actions.payload }

        default:
            return state;
    }
}