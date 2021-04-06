import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from 'axios';

//actions
const LOG_IN = "LOG_IN"; //로그인
const LOG_OUT = "LOG_OUT"; //로그아웃
const GET_USER = "GET_USER"; //유저정보 가져오기


//actionCreators
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));


//initialState
const initialState = {
    user_list: [],
    is_login: false,
};

//api연결!

const mockUserAPl = 'https://run.mocky.io/v3/ce3bcb61-6cb3-471d-bc40-e3243360b529'

const loginAPI = (username,pwd) => {
    return function (dispatch, getState, { history }) {
        axios
        .post(mockUserAPl)
        .then((res)=>{
            dispatch(logIn(username,pwd));
            history.push("/");
        })
        .catch((e) => console.error(e));
    };
};


//Reducer
export default handleActions({
    [LOG_IN]: (state,action) => produce(state,(draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state,action) => produce(state,(draft) => {
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {

    }),


}, initialState);


//action creator export
const actionCreators = {
    logIn,
    logOut,
    getUser,

};

export {actionCreators};



