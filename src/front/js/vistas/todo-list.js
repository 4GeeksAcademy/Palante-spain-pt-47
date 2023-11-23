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


  return (
    <>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="Añade tus tareas" onChange={(e) => setInput(e.target.value)} value={input} />
        <button type="submit"><i className="fas fa-plus"></i></button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.tasks}
            <button onClick={() => handleEdit(task)} ><i className="fas fa-pen-to-square"></i></button>
            <button ><i className="fas fa-trash"></i></button>
          </li>
        ))}
      </ul>
    </>
  )
}