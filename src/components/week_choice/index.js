import React, { Component } from 'react'
import { connect } from "react-redux"
import { week_choice_async_ction } from "@actions/actionCreator"
import { WeekChoiceWrapper, WeekChoiceItem,LoadingWrapper} from "./styled"
import Bscroll from "@common/bscroll"
class WeekChoice extends Component {
    state={
        loadingFlag:false,
        page:1
    }
    render() {
        let { week_choice} = this.props;
        let {loadingFlag} = this.state;
        console.log(loadingFlag)
        return (
            <Bscroll ref="scroll">
                <WeekChoiceWrapper>
                    <WeekChoiceItem>
                       {loadingFlag?<LoadingWrapper><i className="fa fa-spinner fa-pulse"></i></LoadingWrapper>:''} 
                        {
                            week_choice.map((item, index) => (
                                <div key={index}>
                                    <h2>{item.group_section.title}</h2>
                                    <p className="date">{item.group_section.desc}</p>
                                    <ul>
                                        {
                                            item.tabs.map((tab, idx) => (
                                                <li key={idx}>
                                                    <img src={tab.url} alt="" />
                                                    <div className="title">{tab.title}</div>
                                                    <div className="desc">{tab.desc}</div>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            ))
                        }
                    </WeekChoiceItem>
                </WeekChoiceWrapper>
            </Bscroll>
        )
    }
    componentWillUpdate(newProps,newState){
        if(newProps.week_choice!==this.props.week_choice){
           this.refs.scroll.handlefinishPullDown();
           newState.loadingFlag = false;
           this.refs.scroll.handlefinishPullUp();
        }


    }
    componentDidMount() {
        this.props.getweekChoice();
        //下拉刷新加载数据
        this.refs.scroll.handlepullingDown(()=>{
            this.setState({
                loadingFlag:true
            })

            //随机数据
            let index = parseInt(Math.random()*7)
            let arr = [140,104,144,216,260,299,362]
            this.props.getweekChoice(arr[index],0,'update');
        })

        //上拉加载更多
        this.refs.scroll.handlepullingUp(()=>{
            let cityId = this.props.cityId;
            let page = this.state.page;
            this.props.getweekChoice(cityId,page);
            this.state.page++;
        })


        
    }
}

const mapStateToProps = (state) => ({
    week_choice: state.home.week_choice,
    update:state.home.update,
    cityId:state.home.cityId
})

const mapDispatchToProps = (dispatch) => ({
    getweekChoice(cityid,page,type) {
        dispatch(week_choice_async_ction(cityid, page,type))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WeekChoice)