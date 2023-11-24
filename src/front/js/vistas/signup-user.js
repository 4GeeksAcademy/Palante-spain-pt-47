import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import home from "../../img/home.jpg";
import { Formik } from "formik";

export const Signup_user = () => {

  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [register, setRegister] = useState({ full_name: '', email: [''], password: '', confirm_password: '' })
  const [submit, setSubmit] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault() //Evitar el comportamiento predeterminado que normalmente ocurre cuando se produce un evento. 

    if (!isPasswordValid) {
      console.log("La contraseña no es válida. Por favor, corrige los errores.");
      return;
    }

    // Se ejecuta el fetch desde flux para almacenar los datos del usuario en la base de datos 
    actions.signupUser(register);
    setSubmit(true)
    setTimeout(() => {
      setSubmit(false);
      navigate("/login-user");
    }, 1000);

    setRegister('')

  }


  return (

    <div className="contenedor">
      <div className="imagen user-login" style={{ backgroundImage: `url(${home})` }}>

        <div className="row principal-formulario">
          <div className="col-sm-12 col-md-4 formulario-user">
            <h1 className="titulo-user"><strong>Pa'lante</strong></h1>
            <Formik
              validate={() => {
                let errores = {}

                //Validacion Nombre
                if (register.full_name == "") {
                  errores.full_name = "Por favor, ingresa un nombre completo"
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(register.full_name)) {
                  errores.full_name = "El campo 'Nombre Completo' acepta letras y espacios"
                }

                //Validacion Correo
                if (register.email == "") {
                  errores.email = "Por favor, ingresa un correo electrónico"
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(register.email)) {
                  errores.email = "El campo 'Correo Electrónico' acepta letras, numeros, puntos y guiones "
                }

                //Validacion Contraseña
                if (register.password == "") {
                  errores.password = "Por favor, ingresa una contraseña"
                } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/.test(register.password)) {
                  errores.password = "La contraseña acepta entre 8-15 caracteres, al menos una letra mayúscula y una minúscula, dígitos y caracteres especiales";
                  setIsPasswordValid(false);
                }else {
                  setIsPasswordValid(true);
                }

                //Confirmacion de Contraseña
                if (confirmPassword == "") {
                  errores.confirm_password = "Por favor, rellena el campo faltante"
                } else if (register.password.length >= 8) {
                  if (register.password !== confirmPassword) {
                    errores.confirm_password = "Las contraseñas no coinciden"
                    return;
                  } else {
                    console.log("Las contraseñas coinciden");
                  }
                }

                return errores;
              }}
            >
              {({ handleBlur, errors, touched }) => (
                <form className="form-inputs" onSubmit={handleSubmit}>
                  <div className="container-inputs">
                    <div className="detalle-input">
                      <input
                        type="name"
                        className="form-control"
                        name="full_name"
                        id="exampleInputName1"
                        placeholder="Nombre Completo"
                        aria-describedby="emailHelp"
                        value={register.full_name}
                        onChange={(e) => setRegister({ ...register, full_name: e.target.value })}
                        onBlur={handleBlur}
                      />
                      {touched.full_name && errors.full_name && <div className="alert alert-danger p-1 mt-1 border border-danger" role="alert">{errors.full_name}</div>}
                    </div>
                    <div className="detalle-input">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="exampleInputEmail1"
                        placeholder="Correo Electrónico"
                        aria-describedby="emailHelp"
                        value={register.email}
                        onChange={(e) => setRegister({ ...register, email: e.target.value })}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && <div className="alert alert-danger p-1 mt-1 border border-danger" role="alert">{errors.email}</div>}
                    </div>
                    <div className="detalle-input">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="exampleInputPassword1"
                        placeholder="Contraseña"
                        aria-describedby="emailHelp"
                        value={register.password}
                        onChange={(e) => setRegister({ ...register, password: e.target.value })}
                        onBlur={handleBlur}
                      />
                      {touched.password && errors.password && <div className="alert alert-danger p-1 mt-1 border border-danger" role="alert">{errors.password}</div>}
                    </div>
                    <div className="detalle-input">
                      <input
                        type="password"
                        className="form-control"
                        name="confirm_password"
                        id="exampleInputPassword2"
                        placeholder="Repetir Contraseña"
                        aria-describedby="emailHelp"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={handleBlur}
                      />
                      {touched.confirm_password && errors.confirm_password && <div className="alert alert-danger p-1 mt-1 border border-danger" role="alert">{errors.confirm_password}</div>}
                    </div>

                  </div>
                  <button className="boton-registro">Regístrate</button>
                  {submit && <p className="alert alert-success p-1 text-center mt-1" role="alert">Te haz registrado con exito</p>}
                </form>
              )}
            </Formik>
            <Link to="/signup-freelance" className="ruta-freelance">
              <p className="opcion-registro">¿Te gustaría colaborar?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

}