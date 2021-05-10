
const Navbar = (props) => {

   
    return(
        <nav className="navbar navbar-light bg-info mb-4">
            <span onClick={props.changeToHome} className="navbar-brand">Pokemonstr</span>
           
            { props.display === "Pokemon" ? <input placeholder="search by name..." onChange={(e) => props.handleSearchText(e.target.value)} className="form-control search"></input> : null}
        </nav>
    )
}

export default Navbar