import React, { Component,Fragment} from 'react'
import {PageContainer} from "../commonstyled"
import Header from "@components/header"
import GoodsList from "@components/goodsList"
import HeaderSlider from "@components/headerSlider"
export default class Category extends Component {
    render() {
        let {id} = this.props.match.params
        return (
            <Fragment>
                <Header></Header>
                <PageContainer>
                    <HeaderSlider id={id}/>
                    <GoodsList/>
                </PageContainer>
            </Fragment>
        )
    }
}
