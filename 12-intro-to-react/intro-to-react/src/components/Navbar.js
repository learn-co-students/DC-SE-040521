
//When you DONT export default must use {}
import  NavItem  from './NavItem'

const navItems = ["home", "back", "account", "logout"]

// export default class Navbar extends Component {

//     render(){
//         return(
//             <ul>
//                { navItems.map(item => <NavItem item={item} />) } 
//             </ul>
//         )
//     }
// }

export default function Navbar() {
    return(
        <ul>
            { navItems.map(item => <NavItem item={item} />) } 
        </ul>
    )
}




