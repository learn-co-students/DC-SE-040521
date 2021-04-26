//When you 'export defaut' no {} around component
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar />
      <h1>HELLO WORLD</h1>
      <p>{ `I love react times ${2*500}`}</p> 
    </> 
    );
}

export default App;
