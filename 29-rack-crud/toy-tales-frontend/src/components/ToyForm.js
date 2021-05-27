import {useState} from 'react'

function ToyForm({addToy}){
    let [image, setImage] = useState("")
    let [name, setName] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/toys", {
          method: "POST",
          headers: {
            "Content-type": "Application/json"
          },
          body: JSON.stringify({
            image, 
            name, 
            likes: 0,
          })
        })
          .then(res => res.json())
          .then(newToy => {
            addToy(newToy)
            setImage("")
            setName("")
          })
    }


    return (
        <div className="container">
          <form onSubmit={handleSubmit} className="add-toy-form">
            <h3>Create a toy!</h3>
            <input 
                type="text" 
                name="name" 
                placeholder="Enter a toy's name..." 
                className="input-text"
                value={name}
                onChange={(e) => {setName(e.target.value)}}

            />
            <br/>
            <input 
                type="text" 
                name="image" 
                placeholder="Enter a toy's image URL..." 
                className="input-text"
                value={image}
                onChange={(e) => {setImage(e.target.value)}}
            />
            <br/>
            <input 
                type="submit" 
                name="submit" 
                value="Create New Toy" 
                className="submit"
            />
          </form>
        </div>
      )
}

export default ToyForm