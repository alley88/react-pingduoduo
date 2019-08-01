import styled from "styled-components"

export const GoodsListWrapper = styled.div`
    width:100%;
    background:#fff;
    .goodsItem{
        padding:.3rem;
        display:flex;
        border-bottom:1px solid #ccc;
    }
    .goodsImg{
        width:3.45rem;
        height:2.3rem;
        margin-right:.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .desc{
        width:3.2rem;
        color:#2c3038;
        font-size:.3rem;
        font-family: PingFangSC-Medium;
    }
    .desc_name{
        width:100%;
        height:1.2rem;
        margin-bottom:.2rem;
        line-height:1.3;
    }
    .desc_price{
        display:flex;
        font-size:.3rem;
        p:nth-child(1){
            color:#ff3939
        }
        p:nth-child(2){
            text-decoration: line-through;
            color:#92969c;
            margin-left:.12rem;
        }
    }
`