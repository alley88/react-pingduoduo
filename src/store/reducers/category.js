import {handleActions} from "redux-actions"

const defaultState = {
    goodsList:[]
}

export default handleActions({
    GOODS_LIST_ACTION:(state,action)=>{
        let goodsState = Object.assign({},state);
        goodsState.goodsList = action.payload;
        return goodsState;
    }
},defaultState)