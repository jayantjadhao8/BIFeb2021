import React from "react"
class Color extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"HarleyDavidson",
            color:"red",
            year:2020
        }
    }
    changeTheColor=()=>{
        // this.state.color="green"
        this.setState({color:"green", name:"Jayant"})
    }
    render(){
        return(
            <div>
                <h1>I am {this.state.name} I have a bike of brand {this.state.brand}</h1>
                <p>of color {this.state.color} from the year {this.state.year}</p>
                <button type="button" onClick={this.changeTheColor}>Change the color to green</button>
            </div>
        )
    }
}
export default Color