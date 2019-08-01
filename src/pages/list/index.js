import React, { Component, Fragment } from 'react'
import Header from "@components/header"
import { PageContainer } from "../commonstyled"
import { ListWrapper } from "./styled"
import { connect } from "react-redux"
import { category_list_async_action } from "@actions/actionCreator";
class List extends Component {
    render() {
        let { list } = this.props
        console.log(list)
        return (
            <Fragment>
                <Header />
                <PageContainer>
                    <ListWrapper>
                        {
                            list.map((item, index) => (
                                <div key={index}>
                                    <h2>{item.name}</h2>
                                    <ul>
                                        {
                                            item.sub_category_list.map((child,idx)=>(
                                                <li key={idx}
                                                    onClick={this.handleTo.bind(this,child.sub_category_list?child.sub_category_list[0].id:'')}
                                                >{child.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }

                    </ListWrapper>
                </PageContainer>
            </Fragment>
        )
    }
    handleTo(id){
        this.props.history.push({pathname:"/category/"+id})
    }
    componentDidMount() {
        this.props.handleGetList();
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleGetList() {
        dispatch(category_list_async_action())
    }
})
const mapStateToProps = (state) => ({
    list: state.home.list
})
export default connect(mapStateToProps, mapDispatchToProps)(List)
