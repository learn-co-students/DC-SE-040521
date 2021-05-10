import { Link } from 'react-router-dom'

const Navbar = (props) => {

   
    return(
        <nav className="navbar navbar-light bg-info mb-4">
            <Link to="/"><span className="navbar-brand">Pokemonstr</span></Link>
           
            { props.display === "Pokemon" ? <input placeholder="search by name..." onChange={(e) => props.handleSearchText(e.target.value)} className="form-control search"></input> : null}
        </nav>
    )
}

export default Navbar