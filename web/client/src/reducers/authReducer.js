export default function reducer (state = {
    auth: {
        loggedIn: false
    },
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "LOG_IN": {
            return{
                ...state,
                auth: { loggedIn: true }
            }
            break;
        }
        
        case "LOG_OUT": {
            return{
                ...state,
                auth: { loggedIn: false }
            }
            break;
        }

        default: {
            return state;
            break;
        } 
    }
}