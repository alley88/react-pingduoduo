import React, { Component } from 'react'
import { GoodsListWrapper } from "./styled"
import { connect } from "react-redux"
class GoodsList extends Component {
    render() {
        let { goodsList } = this.props;
        return (
            <GoodsListWrapper>
                {
                    goodsList.map((item,index) => (
                        <div className="goodsItem" key={index} data-id={item.product_id}>
                            <div className="goodsImg">
                                <img src={item.product_image} alt="" />
                            </div>
                            <div className="desc">
                                <p className="desc_name">{item.name}</p>
                                <div className="desc_price">
                                    <p>{item.price/100}/位</p>
                                    <p>¥{item.original_price/100}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </GoodsListWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    goodsList: state.category.goodsList
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList)
