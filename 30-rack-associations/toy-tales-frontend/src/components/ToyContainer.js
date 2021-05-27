import ToyCard from './ToyCard'

function ToyContainer({toys, updateToy, deleteToy}){

    let toyCards = toys.map(toy => <ToyCard toy={toy} key={toy.id} updateToy={updateToy} deleteToy={deleteToy}/>)

    return(
        <div id="toy-collection">
            {toyCards}    
        </div>
    )
}

export default ToyContainer