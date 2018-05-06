import axios from 'axios';

export function fetchCourts(){
    return (dispatch) => {
        axios.get('http://localhost:8000')
        .then(res=>{
            dispatch({type: "COURTS_FULFILLED", payload: res.data})
        })
        .catch(err=>{
            dispatch({type: "COURTS_REJECTED", payload: err})
        }) 
    }
}