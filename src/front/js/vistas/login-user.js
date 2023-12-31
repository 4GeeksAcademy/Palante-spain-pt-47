import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import fondo from "../../img/imghomeazul__1_.png"
import saludo_hola from "../../img/saludo_hola.png";
import home from "../../img/home.jpg";
import Palante from "../../img/Palante.png"

export const Login_user = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Condiciona al usuario para completar los campos
    if (user.email.trim() === "" || user.password.trim() === "") {
      setError("Rellene los campos requeridos.");
      return;
    }

    // Se ejecuta el fetch desde flux para verificar al usuario e iniciar sesión
    const success = await actions.loginUser(user);

    if (success) {
      setSubmit(true);
      setTimeout(() => {
        setSubmit(false);
        navigate("/perfil_user");
      }, 500);
    } else {
      setError("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
      setSubmit(false); 
    }

    setUser('');
  };

  return (
    <>
      <div className="contenedor">
        <div className="imagen user-login" style={{ backgroundImage: `url(${home})` }}>
          <div className="row principal-formulario">
            <div className="col-sm-12 col-md-4 formulario-user">
              <h1 className="titulo-user"><strong>Pa'lante</strong></h1>
              <form className="form-inputs" onSubmit={handleSubmit}>
                <div className="container-inputs">
                  <div className="detalle-input">
                    <input
                      type="email"
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
                    <input
                      type="password"
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
                <button className="boton-login">Inicia sesión</button>
                {error && <p className="alert alert-danger p-1 text-center mt-1" role="alert">{error}</p>}
                {submit && !error && <p className="alert alert-success p-1 text-center mt-1" role="alert">Sesión Iniciada</p>}
                <Link to="/recover-password">
                  <p className="opcion-contraseña">¿Has olvidado tu contraseña?</p>
                </Link>
              </form>
              <p className="ruta-register">¿Aún no tienes cuenta? <Link to="/signup-user" className="ruta-registers">Regístrate</Link></p>
            </div>
            <div class="col-sm-12 col-md-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};