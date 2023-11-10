import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"

export const Login = () => {

  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [user, setUser] = useState({email: "", password: "",});
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
		},800);

		return (
			<div className="container">
			  <p className="alert alert-warning">Haz iniciado sesion</p>
			</div>
		  );
		};
	  
  return (
    <div className="container">
    <form className="from" onSubmit={handleSubmit}>
      <h1>Login</h1>

      <label for="exampleInputEmail1" class="form-label">Correo electronico *</label>
      <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} onChange={(e) => setUser({...user,email:e.target.value})} />

      <label for="exampleInputEmail1" class="form-label">Contraseña *</label>
      <input type="Password" className="form-control" name="Password" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} />
      <br />
      <button>Inicio de sesion</button>
    </form>
  </div>
   

	)
}