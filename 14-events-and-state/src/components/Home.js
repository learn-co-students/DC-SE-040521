  
const Home = (props) => {
    
    return (
          <div className="jumbotron bg-secondary text-center text-danger">
            <div className="container">
                <div className="ht-tm-header">
                    <h1 className="display-1 display-xxl text-uppercase">Paintings</h1>
                    <span className="lead text-primary">A cool app to see cool painting things</span>
        
                    <div className="mt-4">
                        <button onClick={() => props.changeToPaintings()} className="btn btn-primary btn-lg m-2">
                            <span>See the Paintings</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home