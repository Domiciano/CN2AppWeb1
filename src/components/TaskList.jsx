import { useState, useEffect } from "react";

const TaskList = () => {

    //Estados

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    //Efectos
    useEffect(
        ()=>{
            console.log("Se ha montado el componente");    
            setTimeout(()=>{
                console.log("Han passado 5 segundos");    
                setTaskList(["Alfa", "Beta", "Gamma"]);
            },2000);
        }, []   
    );

    //Handlers
    const handleAddToList = ()=>{
        console.log(task);
        setTaskList( (prev) => [...prev, task ] );
        setTask("");
    }

    //View
    return (
        <>
            {/* Parrila */}
            <div>
                {taskList.map((value, index)=> (
                        <p key={index}>{value}</p>
                ))}
            </div>
            {/* Input de texto para escribir la tarea */}
            <input value={task} onChange={ (e) => setTask(e.target.value) } placeholder="Escribe tu tarea aquí"/>
            <button onClick={handleAddToList}>Agregar</button>
        </>
    );
}

export default TaskList;