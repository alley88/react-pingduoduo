import http from "@utils/http.js"
//home 周选择接口
export const week_choice = (cityId=140,page=0)=>http.get("/api/hub/home/v1/web/week_choice.json?city_id="+cityId+"&page="+page);
//列表导航
export const category_List = ()=>http.get("/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9ZGJiYmNiZTM1ZThhY2M2NjNmODk2NWEwNTM3ZWQyYjYmMjAxOTA4MDExNzAw.json")
//分类导航
export const tab_sub = ()=>http.get("/api/4/tab/sub_category.json?category_id=4&city_id=140&from_id=0");
//商品列表
export const goodsList = (category_id=5,sort,cityId,page)=>http.get("/api/4/tab/category_product_list.json?category_id="+category_id+"&sort="+sort+"&from_id=0&city_id="+cityId+"&page="+page+"")