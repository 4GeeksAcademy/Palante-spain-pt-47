import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import fondoamarillo from "/workspaces/spain_part_time47/src/front/img/logo_Perfil.jpg"



export const User_information = () => {

  const { store, actions } = useContext(Context)
  const [info, setInfo] = useState("")

  console.log("AQUI info",info);

  useEffect(() => {
    actions.dataUser(info);
  }, []) // Ejecuta la accion para pintar los datos de usuario

  useEffect(() => {
    setInfo(store.datauser);
  }, [store.datauser]) //Toma los datos nuevos que ingresa el usuario y se ejecuta cada vez que se modfica el store

  const handleSubmit = () =>{
    e.preventDefault();
    actions.updateData();
  } //Ejecuta la modificacion de los datos

  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="portada">datos personales</h1>
      </div>
      <div className="row">
        <nav className="navbar expand-lg" id="informacion-personal">
          <h3 className="texo-informacion"><i class="fa fa-circle-info"></i>información básica</h3>
        </nav>
        <div className="col-6" >
          <form className="form-data" onSubmit={handleSubmit} >
            <div className="detalle-input">
              <input
                type="name"
                className="form-control"
                name="full_name"
                id="exampleInputName1"
                placeholder="Nombre Completo"
                aria-describedby="emailHelp"
                value={info.full_name}
                onChange={(e) => setInfo({ ...info, full_name: e.target.value })} //Pinto el valor "full_name" del usuario logeado que tengo almacenado en el store 
              />
              <button>
                <i class="fa fa-pencil"></i>
              </button>
            </div>
            <div className="detalle-input">
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                placeholder="Correo Electrónico"
                aria-describedby="emailHelp"
                value={info.email}
                onChange={(e) => setInfo({...info, email: e.target.value})} //Pinto el valor "email" del usuario logeado que tengo almacenado en el store
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
