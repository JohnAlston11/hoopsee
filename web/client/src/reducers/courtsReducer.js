
export default (state = {
    data: [],
    todos: ['clean', 'shower', 'wash'],
    todo:'',
    fetching: false,
    fetched: false,
    error: null
}, action)=>{
    switch(action.type){
        case 'SET':{ 
            return  state;
        }
        default:
            return state;
    }
}