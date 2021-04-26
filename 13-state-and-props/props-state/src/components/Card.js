
export const Card = ({ paintingData }) => {
    const {artist, title, image } = paintingData
    return (
        <div className="card m-2 p-2">
            <img src={image} class="card-img-top" alt="..." />
            <div className="card-header">{title}</div>
            <div className="card-body">
                <h4 className="card-title">{artist.name}</h4>
            </div>
        </div>
    )
}
