import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const Signup_user = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [register, setRegister] = useState({ full_name: '', email: '', password: '' })
  const [submit, setSubmit] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault() //Evitar el comportamiento predeterminado que normalmente ocurre cuando se produce un evento. 

    // Condición para verificar que las contraseñas coincidan
    if (register.password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

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
    <div className="container-fluid">
      <div className="container-form">
        <div className="container-logo">
          <h1 className="logo">Pa'lante</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="container-inputs">
            <input type="name" className="form-control" name="full name" id="exampleInputName1" placeholder="Nombre Completo" aria-describedby="emailHelp" value={register.full_name} onChange={(e) => setRegister({ ...register, full_name: e.target.value })} />
            <input type="email" className="form-control" name="email" id="exampleInputEmail1" placeholder="Correo Electrónico" aria-describedby="emailHelp" value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} />
            <input type="password" className="form-control" name="Password" id="exampleInputPassword1" placeholder="Contraseña" aria-describedby="emailHelp" value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />
            <input type="password" className="form-control" name="Confirm Password" id="exampleInputPassword2" placeholder="Repite Contraseña" aria-describedby="emailHelp" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button className="login">Registrate</button>
        </form>
      </div>
    </div>
  );

}