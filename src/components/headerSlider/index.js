import React, { Component } from 'react'
import {HeaderSliderWrapper,Categorypanel} from "./styled"
import {tab_sub} from "@api/home"
import {connect} from "react-redux"
import {goods_list_async_action} from "@actions/actionCreator"
class HeaderSlider extends Component {
    state = {
        data:{
            sort:[]
        },
        flag:false,
        toggleName:"智能排序"
    }
    render() {
        let {data,flag,toggleName} = this.state;
        return (
            <HeaderSliderWrapper>
                    <ul className="headerTab">
                        <li>全部</li>
                        <li onClick={this.handleToggle.bind(this)}>{toggleName}</li>
                    </ul>
                    <Categorypanel flag={flag}>
                        <ul>
                            {
                                data.sort.map((item,index)=>(
                                    <li 
                                        key={index} 
                                        onClick={this.handleItemToggle.bind(this,item.sort_id,item.sort_name)}
                                    
                                    >{item.sort_name}</li>
                                ))
                            }
                        </ul>
                    </Categorypanel>
            </HeaderSliderWrapper>
        )
    }
    handleItemToggle(sort,name){
        this.setState({
            flag:false,
            toggleName:name
        })
        let cityId = this.props.cityId
        let id = this.props.id
        this.props.handleGetGoodsList(id,sort,cityId,0);
    }
    handleToggle(){
        this.setState({
            flag:!this.state.flag
        })
    }
    async componentDidMount(){
        //tabBar列表
        let data = await tab_sub();
        this.setState({
            data:data
        })
        //城市id
        let cityId = this.props.cityId
        //菜品类型
        let id = this.props.id
        //商品列表
        this.props.handleGetGoodsList(id,1,cityId,0);
    }
}
const mapStateToProps = (state)=>({
    cityId:state.home.cityId
})

const mapDispatchToProps = (dispatch)=>({
    handleGetGoodsList(category_id,sort,cityId,page){
        dispatch(goods_list_async_action(category_id,sort,cityId,page))
    }
})
export default  connect(mapStateToProps,mapDispatchToProps)(HeaderSlider)