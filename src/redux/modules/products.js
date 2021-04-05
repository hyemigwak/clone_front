import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'

const LOADING = "LOADING";
const SET_PRODUCTS = "SET_PRORUCTS"
 
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const setProducts = createAction(SET_PRODUCTS,(data)=>({data}))
const initialState = {
  product_list: [],
  isLoading: false,
};

const mockAPl = 'https://run.mocky.io/v3/8cd1d27f-56b5-412a-825a-09c4f450fedf'

const getProductsAPI = () => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios
      .get(mockAPl)
      .then((resp) => {
        dispatch(setProducts(resp.data.mockProducts));
        dispatch(loading(false));
      })
      .catch((e) => console.error(e));
  };
};

export default handleActions(
  {   
     [SET_PRODUCTS]: (state, action) =>
    produce(state, (draft) => {
      draft.is_loading = action.payload.is_loading;
      draft.product_list= action.payload.data
    }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);
const actionCreators = {
  setProducts,
  getProductsAPI
};

export { actionCreators };
