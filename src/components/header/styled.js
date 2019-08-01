import styled from "styled-components"

export const HeaderWrapper = styled.div`
    width:100%;
    height:.88rem;
    background:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    color:#fff;
    font-size:.3rem;
    z-index:10;
    .header-left{
        position:absolute;
        left:.2rem;
    }
    .header-right{
        position:absolute;
        right:.2rem;
        display:flex;
        justify-content:space-between;
    
    }
    i{
        font-size:.45rem;
        font-weight:900;
        margin-left:.1rem;
    }
`