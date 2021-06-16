import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './SignUp'
import LogIn from './Login'

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/articles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(articles => {
      console.log(articles)
      setArticles(articles)
    })
  }, [])

  let Logout = () => {
    localStorage.clear()
  }

  return(
  <BrowserRouter>
    <div className="App">
      HOME PAGE
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
      <button onClick={() => Logout()}>Log Out</button>
    </div>
  </BrowserRouter>
  );
}

export default App;
