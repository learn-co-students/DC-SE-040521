const LogIn = () => {

    let logIn = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e.target[0].value,
                password: e.target[1].value
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            localStorage.token = userInfo.token
        })
    } 

    return(
    <div>
        <h2>LogIn</h2>
        <form onSubmit={(e) =>  logIn(e) }>
        <label>UserName</label>
        <input name="username" type="text" />
        <label>Password</label>
        <input name="password" type="password" />
        <input type="submit"/>
        </form>
    </div>
    )

}

export default LogIn