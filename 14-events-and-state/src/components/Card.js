

export const Card = (props) => {
    return (
        <div onClick={() => props.deletePainting(props.painting)} className="card m-2 p-2">
            <img src={props.painting.image} className="card-img-top" alt="..." />
            <div className="card-header">{props.painting.title}</div>
            <div className="card-body">
                <h4 className="card-title">{props.painting.artist.name}</h4>
            </div>
        </div>
    )
}


