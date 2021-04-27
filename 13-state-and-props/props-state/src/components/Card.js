

export const Card = (props) => {
    return (
        <div className="card m-2 p-2">
            <img src={props.data.image} className="card-img-top" alt="..." />
            <div className="card-header">{props.data.title}</div>
            <div className="card-body">
                <h4 className="card-title">{props.data.artist.name}</h4>
            </div>
        </div>
    )
}


