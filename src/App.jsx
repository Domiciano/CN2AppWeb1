import './App.css'
//Declaracion
import {Footer} from './components/Footer';

function App() {  
  return (
    <>
      <h1>Reacts es lo mejor</h1>
      <span>No hay que temer</span>
      <button>Ingresar</button>
      {/*USO */}
      <Footer universityName="MIT"/>
      <Footer universityName="Oxford"/>
      <Footer universityName="Icesi"/>
    </>
  )
}


export default App
