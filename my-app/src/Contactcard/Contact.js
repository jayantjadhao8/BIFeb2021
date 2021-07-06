import React from "react"
import ContactComp from "./ContactComp"
import data from "./ContactData"
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.contactComponent=data.map(user=>
            <ContactComp contact={{
                   name:user.name,
                   phone:user.phone,
                   email:user.email,
                   imgURL:user.imgURL
                   }}/>
       )
    }
    render(){
        return(
            <div>
                {this.contactComponent}
            </div>
        ) 
    }
}
// function Contact(){
//     const contactComponent=data.map(user=>
//          <ContactComp contact={{
//                 name:user.name,
//                 phone:user.phone,
//                 email:user.email,
//                 imgURL:user.imgURL
//                 }}/>
//     )
    // return(
    //     <div>
    //         {contactComponent}
    //     </div>


        // <div>
        //     <ContactComp contact={{
        //         name:"Rahul Kumar",
        //         phone:"Phone: 764748672436",
        //         email:"Email: rahul@gmail.com",
        //         imgURL:"http://placekitten.com/200/300"
        //         }}/>
        //         <ContactComp contact={{
        //         name:"Rahul Kumar",
        //         phone:"Phone: 764748672436",
        //         email:"Email: rahul@gmail.com",
        //         imgURL:"http://placekitten.com/200/300"
        //         }}/>
        //         <ContactComp contact={{
        //         name:"Rahul Kumar",
        //         phone:"Phone: 764748672436",
        //         email:"Email: rahul@gmail.com",
        //         imgURL:"http://placekitten.com/200/300"
        //         }}/>
        //         <ContactComp contact={{
        //         name:"Rahul Kumar",
        //         phone:"Phone: 764748672436",
        //         email:"Email: rahul@gmail.com",
        //         imgURL:"http://placekitten.com/200/300"
        //         }}/>
        //         <ContactComp contact={{
        //         name:"Rahul Kumar",
        //         phone:"Phone: 764748672436",
        //         email:"Email: rahul@gmail.com",
        //         imgURL:"http://placekitten.com/200/300"
        //         }}/>
        //         <ContactComp contact={{
        //         name:"Rahul Kumar",
        //         phone:"Phone: 764748672436",
        //         email:"Email: rahul@gmail.com",
        //         imgURL:"http://placekitten.com/200/300"
        //         }}/>
        // </div>
        
//     )
// }
export default Contact