
const Navbar = (props) => {

   
    return(
        <nav className="navbar navbar-light bg-info mb-4">
            <span onClick={props.changeToHome} className="navbar-brand">Paintr</span>
           
            { props.display === "Paintings" ?  <input onChange={(e) => props.handleSearchText(e.target.value)} className="form-control"></input> : null}
        </nav>
    )
}

export default Navbar