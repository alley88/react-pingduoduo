import React, { Component,Fragment} from 'react'
import {Route} from "react-router-dom"
import Layout from "@layout"
export default class extends Component {
        render() {
            let {component,meta,path} = this.props
            return (
                <Fragment>
                   <Layout {...meta}><Route path={path} component={component}/></Layout>
                </Fragment>
                
            )
        }
    }
