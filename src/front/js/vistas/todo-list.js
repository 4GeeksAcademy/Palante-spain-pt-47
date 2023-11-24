import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  console.log("TASKS", tasks);
  console.log("INPUT", input);

  // Traer las tareas
  useEffect(() => {
    const token = sessionStorage.getItem('token');

    fetch(process.env.BACKEND_URL + '/tasks', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + token
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setTasks(data);
      })
      .catch(err => console.log("err", err))
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (selectedTask) {
      // Modificar tarea existente
      const token = sessionStorage.getItem('token');
      fetch(process.env.BACKEND_URL + `/updatetask/${selectedTask.id}`, {
        method: "PUT",
        body: JSON.stringify({ tasks: input }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + token
        },
      })
        .then(resp => resp.json())
        .then(data => {
          console.log("TAREA MODIFICADA", data);
          setTasks(tasks.map(task => (task.id === selectedTask.id ? data : task)));
          setInput(""); // Limpiar el input después de modificar la tarea
          setSelectedTask(null); // Desmarcar la tarea seleccionada
        })
        .catch(err => console.log("err", err))
    } else {
      // Agregar nueva tarea
      if (input.trim() === "") {
        // Evitar agregar una tarea vacía o solo con espacios en blanco
        return;
      }

      const token = sessionStorage.getItem('token');
      fetch(process.env.BACKEND_URL + '/createtask', {
        method: "POST",
        body: JSON.stringify({ tasks: input }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + token
        },
      })
        .then(resp => resp.json())
        .then(data => {
          console.log("TAREA CREADA", data);
          setTasks(prevTasks => [...prevTasks, data]);
          setInput(""); // Limpiar el input después de agregar la tarea
        })
        .catch(err => console.log("err", err))
    }
  };

  //Ejecuta la funcion para editar un tarea
  const handleEdit = (task) => {
    // Preparar la tarea seleccionada para la edición
    setInput(task.tasks);
    setSelectedTask(task);
  };

  //Ejecuta la funcion para eliminar una tarea
  const handleDelete = (taskId) => {
    const token = sessionStorage.getItem('token');
    fetch(process.env.BACKEND_URL + `/deletetask/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + token
      },
    })
      .then(resp => {
        if (resp.ok) {
          setTasks(tasks.filter(task => task.id !== taskId));
        } else {
          console.log("Error al eliminar la tarea");
        }
      })
      .catch(err => console.log("err", err));
  };

  //Marcar tareas como hechas
 /* const handleToggleDone = (taskId) => {
    const token = sessionStorage.getItem('token');
    fetch(process.env.BACKEND_URL + `/updatetask/${taskId}`, {
      method: "PUT",
      body: JSON.stringify({ done: true }), // Puedes ajustar según tu modelo de datos
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + token
      },
    })
      .then(resp => resp.json())
      .then(data => {
        console.log("TAREA MARCADA COMO HECHA", data);
        setTasks(tasks.map(task => (task.id === taskId ? data : task)));
      })
      .catch(err => console.log("err", err));
  };
*/
  return (
    <div className="container-fluid todo-list">
      <h1 className="titulo-tareas">Lista de Tareas</h1>
      <form className="formulario-tarea" onSubmit={handleClick}>
        <input className="intro-tarea" type="text" placeholder="Añade tus tareas" onChange={(e) => setInput(e.target.value)} value={input} />
        <button className="boton-add" type="submit"><i className="fas fa-plus"></i></button>
      </form>
      <ul className="listado-tareas">
        {tasks.map((task) => (
          <li className="item-tarea" key={task.id}>{task.tasks}
            <div className="botones-utiles">
              <button className="boton-editar" onClick={() => handleEdit(task)}><i className="fas fa-pen-to-square"></i></button>
              <button className="boton-eliminar" onClick={() => handleDelete(task.id)}><i className="fas fa-trash"></i></button>
            </div>
            {/*<button onClick={() => handleToggleDone(task.id)}>Marcar como hecha</button>*/} 
          </li>
        ))}
      </ul>
      <div className="numero-tareas">
          <div>{tasks.length} tareas.</div>
        </div>
    </div>
  )
}