import React,{useState} from "react"
/*class Count extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render(){
        return(
        <div>
            <p>You clicked the button {this.state.count} times</p>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me</button>
        </div>
        )
    }
}*/
function Count(){
    const [count, setCount]=useState(100)
    //setCount - this is a function - used for setting count values
    return(
        <div>
            <p>You clicked the button {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}
export default Count