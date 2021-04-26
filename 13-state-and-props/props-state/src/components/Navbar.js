
export const Navbar = (props) => {
    return(
        <nav className="navbar navbar-light bg-info mb-4">
            <span className="navbar-brand">CoolApp</span>
            <button onClick={props.flipContainer}> show cards</button>
        </nav>
    )
}