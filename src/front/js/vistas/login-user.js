import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import fondo from "/workspaces/spain_part_time47/src/front/img/imghomeazul__1_.png"

export const Login_user = () => {

  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "", });
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault() //Evitar el comportamiento predeterminado que normalmente ocurre cuando se produce un evento. 

    // Condiciona al usuario para completar los campos
    if (user.email.trim() === "" || user.password.trim() === "") {
      alert("Rellene los campos requeridos.");
      return;
    }

    // Se ejecuta el fetch desde flux para verifica al usuario e iniciar sesion
    actions.loginUser(user);
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
      navigate("/");
    }, 1500);

    setUser('')
  }
  
  // Si submit es true, muestra un mensaje de confirmación y redirige a home
  /*if (submitted) {
    actions.loginPrivate(user)
    setTimeout(() => {
      navigate("/");
    }, 800);

    return (
      <div className="container">
        <p className="alert alert-warning">Haz iniciado sesion</p>
      </div>
    );
  };*/

  return (
    <div className="container-fluid">
      <img className="imagen-fondo" src={fondo} />
      <div className="container-form">
        <div className="container-logo">
          <h1 className="logo">Pa'lante</h1>
        </div>
        <form className="form-inputs" onSubmit={handleSubmit}>
          <div className="container-inputs">
            <div className="detalle-input">
              <input type="email" 
                className="form-control" 
                name="email" 
                id="exampleInputEmail1" 
                placeholder="Correo Electrónico" 
                aria-describedby="emailHelp" 
                value={user.email} 
                onChange={(e) => setUser({ ...user, email: e.target.value })} 
            />
            </div>
            <div className="detalle-input">
              <input type="Password" 
                className="form-control" 
                name="Password" 
                id="exampleInputPassword1" 
                placeholder="Contraseña" 
                aria-describedby="emailHelp" 
                value={user.password} 
                onChange={(e) => setUser({ ...user, password: e.target.value })} 
              />
            </div>
          </div>
          <button className="boton-login">Inicia sesion</button>
          {submit && <p className="alert alert-success p-1 text-center mt-1" role="alert">Sesión Iniciada</p>}
          <Link to=""> 
            <p className="opcion-contraseña">¿Has olvidado tu contraseña?</p>
          </Link>
        </form>
        <p className="ruta-register">¿Aún no tienes cuenta? <Link to="/signup-user" className="ruta-registers">Registrate</Link></p>
      </div>
    </div>
  )
}