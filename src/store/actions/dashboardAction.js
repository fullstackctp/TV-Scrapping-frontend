import { FETCH_DATA, FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "store/constants/dashboardConstant";
import axios from "axios";

const fetchData = () => {
    return {
        type : FETCH_DATA
    }
}

const fetchDataSuccess = (data) => {
    return {
        type : FETCH_DATA_SUCCESS,
        payload : data
    }
}

const fetchDataFailure = (err) => {
    return {
        type : FETCH_DATA_FAILURE,
        payload : err
    }
}

const dsahboardDataAction = (payload) => {
    console.log(JSON.parse(localStorage.getItem('userData')).access_token,'dataishere===============')
    return dispatch => {
        dispatch(fetchData())
        axios
        .post("http://localhost:8000/dash/", {stocks : payload.stock,limit : parseInt(payload.limit)},{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('userData')).access_token}`
            }})
        .then((res) => {
          console.log(res,'resishsuccess')
          dispatch(fetchDataSuccess(res.data))
        })
        .catch((err) => {
          console.log(err,'errorishere');
          dispatch(fetchDataFailure(err))
        });
    }
}

export default  dsahboardDataAction