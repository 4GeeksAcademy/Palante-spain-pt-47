import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const Signup_user = () => {
	const { actions } = useContext(Context);
	const navigate = useNavigate();
	const [register, setRegister] = useState({full_name:'', email:'', password:''})
	const [submit, setSubmit] = useState(false);
	
  const handleSubmit = (e) => {
		e.preventDefault() //Evitar el comportamiento predeterminado que normalmente ocurre cuando se produce un evento. 

		// Condiciona al usuario para completar los campos 
		if (register.full_name.trim() === "" || register.email.trim() === "" || register.password.trim() === "") {
			alert("Los campos son requeridos");
			return; 
		  }
		
		  // Se ejecuta el fetch desde flux para almacenar los datos del usuario en la base de datos 
		  actions.signupUser(register);
		  setSubmit(true);
		}
	// Si submit es true, muestra un mensaje de confirmación y redirige a login
	if (submit) {
		setTimeout(() => {
		navigate("/login"); // Navigate ejecuta la redireccion a login
		}, 800);

		return (
			<div className="container">
			  <p className="alert alert-success-emphasis">Usuario creado con exito.</p>
			</div>
		  );
		};

  return (
    <div className="container">
      <form className="from" onSubmit={handleSubmit}>
        <h1>Registro de usuario</h1>

        <label for="exampleInputEmail1" class="form-label">Full name *</label>
        <input type="name" className="form-control" name="full name" id="exampleInputEmail1" aria-describedby="emailHelp" value={register.full_name} onChange={(e) => setRegister({...register,full_name:e.target.value})} />
  
        <label for="exampleInputEmail1" class="form-label">Email *</label>
        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={register.email} onChange={(e) => setRegister({...register,email:e.target.value})} />

        <label for="exampleInputEmail1" class="form-label">Password *</label>
        <input type="Password" className="form-control" name="Password" id="exampleInputEmail1" aria-describedby="emailHelp" value={register.password} onChange={(e) => setRegister({...register,password:e.target.value})} />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
  
}