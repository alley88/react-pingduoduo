import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import {withRouter} from "react-router-dom"
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div className="header-left">
                    <div onClick={this.handleTo.bind(this)}>分类</div>
                </div>
                <div className="header-center">
                    <h2>美食商城</h2>
                </div>
                <div className="header-right">
                    <div>登陆</div>
                    <div>
                        <i className="iconfont">&#xe62a;</i>
                    </div>
                </div>
            </HeaderWrapper>
        )
    }
    handleTo(){
        this.props.history.push("/list")
    }
}

export default  withRouter(Header)