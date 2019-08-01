import {createAction} from 'redux-actions';
import {week_choice,category_List,goodsList} from "@api/home.js"
//redux-promise-middleware
// export const getMovieAction = createAction("MOVIE_DATA",async ()=>{
//         let data = getMovie();
//         return data;
// })

//reudx-thunk
// const getMovieAction = createAction("MOVIE_DATA")
// export const getMovieActionAsync =  ()=>{ 
    
//     return async (dispatch)=>{
//         let data = await getMovie();
//         dispatch(getMovieAction(data))
//     }
// }

//export const getMovieAction = createAction("MOVIE_DATA");
//export const getMovieFetchAction = createAction("FETCH_MOVIE_DATA");

//周推荐
const week_choice_action = createAction("WEEK_CHOICE_ACTION");

export const  week_choice_async_ction = (cityId,page,type)=>{
    return async (dispatch)=>{
        let data = await week_choice(cityId,page);
        dispatch(week_choice_action({data,type,cityId}))
    }
}


//分类列表
const category_list_action = createAction("CATEGORY_LIST_ACTION");

export const category_list_async_action = ()=>{
    return async (dispatch)=>{
        let data = await category_List();
        console.log(data)
        dispatch(category_list_action(data))
    }
}

//商品列表

const goods_list_action = createAction("GOODS_LIST_ACTION");

export const goods_list_async_action = (category_id,sort,cityId,page)=>{
    return async (dispatch)=>{
        let data = await goodsList(category_id,sort,cityId,page);
        dispatch(goods_list_action(data))
    }
}