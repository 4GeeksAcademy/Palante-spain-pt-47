import React, { useContext } from "react";
import { Context } from "../store/appContext";
import fondoamarillo from "/workspaces/spain_part_time47/src/front/img/logo_Perfil.jpg"


export const User_information = () => {

  const { store } = useContext(Context)
  //const [info, setInfo] = useState({})
  

  /*useEffect(() => {
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
  }, [])*/


  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="portada">datos personales</h1>
      </div>
      <div className="row">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h3 className="navbar-brand">información básica</h3>
          </div>
        </nav>
        <div className="col-6" >
          <form className="form-data" >
            <div className="detalle-input">
              <input
                type="name"
                className="form-control"
                name="full_name"
                id="exampleInputName1"
                placeholder="Nombre Completo"
                aria-describedby="emailHelp"
                value={store.datauser.full_name} //Pinto el valor "full_name" del usuario logeado que tengo almacenado en el store 
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
                value={store.datauser.email} //Pinto el valor "email" del usuario logeado que tengo almacenado en el store
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
