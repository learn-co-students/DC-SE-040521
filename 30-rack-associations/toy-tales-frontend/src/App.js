import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import {useState, useEffect} from 'react'

function App(){

  let [display, setDisplay] = useState(false)
  let [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/toys")
      .then(res => res.json())
      .then(toysArr => {
        console.log(toysArr)
        setToys(toysArr)
      })
  }, [])

  let addToy = (newToy) => {
    let newToysArr = [...toys, newToy]
    setToys(newToysArr)
  }

  let updateToy = (updatedToy) => {
    let updatedToysArr = toys.map(toy => {
      if(toy.id === updatedToy.id){
        return updatedToy
      } else {
        return toy
      }
    })

    setToys(updatedToysArr)
  }


  let deleteToy = (toyID) => {
    let deletedToysArr = toys.filter(toy => toy.id !== toyID)
    setToys(deletedToysArr)
  }

  return(
    <>
        <Header/>
        { display ? <ToyForm addToy={addToy} /> : null }
        <div className="buttonContainer">
          <button onClick={() => setDisplay(!display)}> Add a Toy </button>
        </div>
        <ToyContainer 
          toys={toys}
          updateToy={updateToy}
          deleteToy={deleteToy}
        />
      </>
  )
}

export default App;
