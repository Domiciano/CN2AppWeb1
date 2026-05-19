import './App.css'
//Declaracion
import {Footer} from './components/Footer';
import Counter from './components/Counter'
import TaskList from './components/TaskList'

function App() {  
  return (
    <>
      <h1>Reacts es lo mejor</h1>
      <span>No hay que temer</span>
      <TaskList/>
      <br/><br/><br/>
      <Counter/>
      {/*USO */}
      <Footer universityName="MIT"/>
      <Footer universityName="Oxford"/>
      <Footer universityName="Icesi"/>
      
    </>
  )
}


export default App
