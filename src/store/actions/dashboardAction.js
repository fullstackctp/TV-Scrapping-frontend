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
//     axios.post('http://127.0.0.1:8000/login/',{
//     "username": "root",
//     "email": "",
//     "password": "root"
// })
    return dispatch => {
        dispatch(fetchData())
        axios
        .post("http://localhost:8000/dash/", {stocks : payload.stock,limit : parseInt(payload.limit)})
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