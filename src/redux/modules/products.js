import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios'

const LOADING = "LOADING";
const SET_PRODUCTS = "SET_PRORUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
 
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const setProducts = createAction(SET_PRODUCTS,(data)=>({data}));
const addProducts = createAction(ADD_PRODUCTS, (data) => ({data}));

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

const addProductsAPI = (title,location,status,tradable,price,deliver,description,keyword,num) => {
  return function (dispatch, getState, {history}){
    axios({
      method: "POST",
      url: "http://15.165.158.39/api/products/new",
      headers: {
          "Accept": "application/json",
          "Content-Type":"application/json;charset=UTF-8",
          'Access-Control-Allow-Origin' : '*'
      },
      data: {
          "product_image":"https://media.bunjang.co.kr/product/151063431_1_1617867108_w856.jpg",
          "name":title,
          "location":location,
          "used":status,
          "tradable":tradable,
          "qty":parseInt(num),
          "keyword":keyword,
          "free_shipping":deliver,
          "price":parseInt(price),
          "description":description,
          "num_faved": 32,
          "num_item_view": 1556,
          "num_comment": 0,
          "user_name" : "LEESYARD",
          "update_time":1616119571,
          "profile_image": "https://media.bunjang.co.kr/images/crop/561950756_w%7Bres%7D.jpg",
          "description_for_detail": "한번 착용한 상품입니다."
      }
    }).then((res)=>{
      console.log(res);
      dispatch(addProducts(res.data))
      history.push("/");
    }).catch(error=>{
      console.log(error);
    });  
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
    [ADD_PRODUCTS]: (state, action) =>
      produce(state, (draft) => {
      draft.product_list.unshift(action.payload.data); 
    }),

  },
  initialState
);

const actionCreators = {
  setProducts,
  getProductsAPI,
  getOneProductAPI,
  addProducts,
  addProductsAPI,
};

export { actionCreators };
