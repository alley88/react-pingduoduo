import React, { Component ,Fragment} from 'react'
import {connect} from "react-redux"
import Header from "@components/header"
import WeekChoice from "@components/week_choice"
import {PageContainer} from "../commonstyled"
class Home extends Component {
    state={
        value:0
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <PageContainer>
                    <WeekChoice/>
                </PageContainer>
            </Fragment>
        )
    }
    componentDidMount(){
        this.setState({
            value:this.state.value+1
        })

        console.log(this.state.value)//0


        this.setState({
            value:this.state.value+1
        })

        console.log(this.state.value)//0


        setTimeout(()=>{

           //2 
            this.setState({
                value:this.state.value+1
            })

            //1 console.log(this.state.value)//2


            this.setState({
                value:this.state.value+1
            })

            // 3 
            console.log(this.state.value)//3
            
        }, 0);
    }
}

const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch)=>({
     
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);