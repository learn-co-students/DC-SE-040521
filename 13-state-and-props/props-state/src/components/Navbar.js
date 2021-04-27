
const Navbar = (props) => {
    return(
        <nav className="navbar navbar-light bg-info mb-4">
            <span className="navbar-brand">CoolApp</span>
            <button onClick={() => props.showContainer()} className="btn btn-dark">{props.show ? "Hide Cards" : "Show Cards"}</button>
        </nav>
    )
}

export default Navbar