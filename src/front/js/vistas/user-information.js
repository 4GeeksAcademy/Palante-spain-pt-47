import React, { useState, useEffect } from "react";
import fondoamarillo from "/workspaces/spain_part_time47/src/front/img/logo_Perfil.jpg"
export const User_information = () => {

  const [info, setInfo] = useState({})

  useEffect(() => {
    const token = sessionStorage.getItem('token')

    fetch(process.env.BACKEND_URL + `/userdata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + token
      },
    })
      .then(resp => resp.json())
      .then(data => setInfo(data))
      .catch(error => console.log(error))
    console.log(setInfo)
  }, [])


  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="portada">datos personales</h1>
      </div>
      <div className="row">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <h3 class="navbar-brand">información básica</h3>
          </div>
        </nav>
        <div className="col-6" >
          <form className="form-data">
            <div className="detalle-input">
              <input
                type="name"
                className="form-control"
                name="full_name"
                id="exampleInputName1"
                placeholder="Nombre Completo"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="detalle-input">
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                placeholder="Correo Electrónico"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="detalle-input">
              <input
                type="password"
                className="form-control"
                name="password"
                id="exampleInputPassword1"
                placeholder="Contraseña"
                aria-describedby="emailHelp"
              />
            </div>
            <button className="boton-actualizar">Actualizar</button>
          </form>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  )
}
