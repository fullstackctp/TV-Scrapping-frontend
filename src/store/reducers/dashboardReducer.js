import { FETCH_DATA, FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS } from "store/constants/dashboardConstant";

const initialState = {
    isLoading : false,
    data : null,
    error :null
}

const dashboardDataReducer = (state = initialState , action) => {

    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                isLoading : true,
            }
        }
        case FETCH_DATA_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                data : action.payload
            }
        }
        case FETCH_DATA_FAILURE : {
            return {
                ...state,
                isLoading : false,
                error : action.payload
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}

export default dashboardDataReducer