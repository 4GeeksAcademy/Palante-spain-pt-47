import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {

  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "", });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault() //Evitar el comportamiento predeterminado que normalmente ocurre cuando se produce un evento. 

    // Condiciona al usuario para completar los campos
    if (user.email.trim() === "" || user.password.trim() === "") {
      alert("Rellene los campos requeridos.");
      return;
    }

    // Se ejecuta el fetch desde flux para verifica al usuario e iniciar sesion
    actions.loginUser(user);
    setSubmitted(true);
  }
  // Si submit es true, muestra un mensaje de confirmación y redirige a home
  if (submitted) {
    actions.loginPrivate(user)
    setTimeout(() => {
      navigate("/");
    }, 800);

    return (
      <div className="container">
        <p className="alert alert-warning">Haz iniciado sesion</p>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="container-form">
        <div className="container-logo">
          <h1 className="logo">Pa'lante</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="container-inputs">
            <input type="email" className="form-control" name="email" id="exampleInputEmail1" placeholder="Correo Electrónico" aria-describedby="emailHelp" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type="Password" className="form-control" name="Password" id="exampleInputPassword1" placeholder="Contraseña" aria-describedby="emailHelp" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
          </div>
          <button className="login">Inicia sesion</button>
        </form>
        <div className="opciones">
          <Link to=""> 
            <p className="opcion-contraseña">¿Haz olvidado tu contraseña?</p>
          </Link>
          <Link to="">
            <p className="opcion-registro">¿Aún no tienes cuenta? Registrate</p>
          </Link>
        </div>
      </div>
    </div>
  )
}