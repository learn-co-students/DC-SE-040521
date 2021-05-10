  
const Home = (props) => {
    
    return (
          <div className="jumbotron bg-secondary text-center text-danger">
            <div className="container">
                <div className="ht-tm-header">
                    <h1 className="display-1 display-xxl text-uppercase">Pokemonstr</h1>
                    <span className="lead text-primary">A cool app to see cool pokemon things</span>
        
                    <div className="mt-4">
                        <button onClick={props.changeToPokemon} className="btn btn-primary btn-lg m-2">
                            <span>See the Pokemonsters</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home