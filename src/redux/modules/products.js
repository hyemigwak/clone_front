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

// const mockAPl = 'https://run.mocky.io/v3/ce3bcb61-6cb3-471d-bc40-e3243360b529'
const products_API = 'http://15.165.158.39/'
const getProductsAPI = () => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios
      .get(products_API)
      .then((resp) => {
        dispatch(setProducts(resp.data));
        dispatch(loading(false));
      })
      .catch((e) => console.error(e));
  };
};

const getOneProductAPI = (id) => {
  return function (dispatch, getState, {history}) {
    dispatch(loading(true));
    axios
    .get(products_API)
    .then((resp)=>{
      const product_list = resp.data;
      const product_idx = product_list.findIndex(p => p.pid === Number(id));
      const product = product_list[product_idx];
      console.log(product);
      dispatch(setProducts([product]));
      dispatch(loading(false));
    })
    .catch((e) => console.error(e));
  }
}

export default handleActions(
  {   
     [SET_PRODUCTS]: (state, action) =>
    produce(state, (draft) => {
      draft.isLoading = action.payload.is_loading;
      draft.product_list= action.payload.data
    }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.isLoading = action.payload.is_loading;
      }),
  },
  initialState
);
const actionCreators = {
  setProducts,
  getProductsAPI,
  getOneProductAPI
};

export { actionCreators };
