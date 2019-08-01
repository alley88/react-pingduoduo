import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import "./index.css"
import { TabBarRouter } from "@router"
export default class TabBar extends Component {
    render() {
        return (
            <div id="tabbar">
                <ul>
                    {
                        TabBarRouter.map((item,index) => (
                            <li key={index}>
                                <NavLink to={item.path}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
