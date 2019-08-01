import React, { Component } from 'react'
import {BSwrapper} from "./styled"
import BScroll from "better-scroll";
export default class Bscroll extends Component {
    render() {
        return (
            <BSwrapper ref="wrapper">
                {this.props.children}
            </BSwrapper>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            probeType:1,
            pullUpLoad:true,
            pullDownRefresh:true
        })
    }
    //下拉滚动
    handleTouchScroll(callback){
        this.scroll.on("scroll",({y})=>{
            if(y>50&&y<60){
                callback()
            }
        })
    }
    //下拉刷新
    handlepullingDown(callback){
        this.scroll.on("pullingDown",()=>{
            callback();
        })
    }
    //下拉刷新数据请求完成
    handlefinishPullDown(){
        this.scroll.finishPullDown();
        this.scroll.refresh();
    }
    //上拉加载更多
    handlepullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback()
        })
    }
    //上拉加载更多完成
    handlefinishPullUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
}
