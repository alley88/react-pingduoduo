import {handleActions} from "redux-actions"
const defaultState = {
    week_choice:[],
    update:1,
    cityId:140,
    list:[]
}

export default handleActions({
    WEEK_CHOICE_ACTION:(state,action)=>{
        let weekState = Object.assign({},state);
       if(action.payload.type){
            weekState.update++;
            weekState.cityId = action.payload.cityId
            weekState.week_choice = action.payload.data
       }else{
            weekState.week_choice = [...weekState.week_choice,...action.payload.data];
       }
        return weekState;
    },
    CATEGORY_LIST_ACTION:(state,action)=>{
        let listState = Object.assign({},state);
        listState.list = action.payload;
        return listState;
    }
    
},defaultState)