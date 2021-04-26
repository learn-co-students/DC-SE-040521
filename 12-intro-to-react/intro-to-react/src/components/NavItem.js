import React, { Component } from 'react'


// export const NavItem = (props) => {
//     console.log(props)
//     return(
//         <li><a href="#home">{props.item}</a></li>
//     )
// }

export default class NavBar extends Component {

    render(){
        return(
           <li><a href="#home">{this.props.item}</a></li> 
        )
    }

}