import React, { Component ,Fragment} from 'react'
import TabBar from "@common/tabBar"
import {Redirect} from "react-router-dom"
export default class Layout extends Component {
    render() {
        let {flag,auth} = this.props
        return (
            <Fragment>
                {auth?(sessionStorage.getItem('token')?this.props.children:<Redirect to="/login"/>):this.props.children}
                {flag?<TabBar/>:''}
            </Fragment>
        )
    }
}
