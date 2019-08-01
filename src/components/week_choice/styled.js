import styled from "styled-components"


export const LoadingWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    i{
        font-size:.5rem;
    }
`
export const WeekChoiceWrapper = styled.div`
    width:100%;
    background:#fff;
    padding:0 .4rem;
`

export const WeekChoiceItem = styled.div`
    .date{
        color:#ff3939
    }
    li{
        padding:.4rem 0;
        border-bottom: 1px solid #e0e0e0;
        width:100%;
        img{
            width:100%;
        }
        .title{
            color:#2c3038;
            font-size:.3rem;
            margin-top:.3rem;
        }
        .desc{
            font-size:.22rem;
            color:#92969c;
            margin-top:16px;
        }
    }
`