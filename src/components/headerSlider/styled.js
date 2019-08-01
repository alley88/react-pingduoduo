import styled from "styled-components"

export const HeaderSliderWrapper = styled.div`
    width:100%;
    height:.81rem;
    border-bottom:1px solid #ccc;
    position: relative;
    .headerTab{
        width:100%;
        height:100%;
        display:flex;
        li{
            width:100%;
            height:100%;
            text-align:center;
            line-height:.81rem;
            font-size:.26rem;
        }
        li:nth-child(1){
            border-right:1px solid #ccc;
        }
    }
`

export const Categorypanel = styled.div`
    width:100%;
    background:#fff;
    position:absolute;
    top:.81rem;
    display:${props=>props.flag?'block':'none'}
    ul{
        width:100%;
    }
    li{
        width:100%;
        height:.82rem;
        text-align:center;
        line-height:.82rem;
        border-bottom:1px solid #ccc;
    }
`