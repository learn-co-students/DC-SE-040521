function ToyCard({toy, deleteToy, updateToy}){

    let {id, name, image, likes} = toy

    let handleDelete = (e) => {
        fetch(`http://localhost:9292/toys/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => {
                deleteToy(id)
            })
    }

    let handleLike = (e) => {
        fetch(`http://localhost:9292/toys/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                likes: likes + 1
            })
        })
            .then(res => res.json())
            .then((updatedToy) => {
                updateToy(updatedToy)
            })
    }


    return (
        <div className="card">
          <h2>{name}</h2>
          <img src={image} alt={name} className="toy-avatar" />
          <p>{likes} Likes </p>
          <button className="like-btn" onClick={handleLike}>Like {'<3'}</button>
          <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
        </div>
      )
}

export default ToyCard