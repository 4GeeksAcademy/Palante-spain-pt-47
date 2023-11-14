import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import fondo from "/workspaces/spain_part_time47/src/front/img/imghomeazul__1_.png"
import { Formik } from "formik";

export const Signup_freelancer = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [register, setRegister] = useState({ full_name: '', email: [''], password: '', confirm_password: '', age: '', years_of_experience: '' })
  const [submit, setSubmit] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault() //Evitar el comportamiento predeterminado que normalmente ocurre cuando se produce un evento. 

      // Se ejecuta el fetch desde flux para almacenar los datos del usuario en la base de datos 
      actions.signupFreelancer(register);

      setSubmit(true)
      setTimeout(() => {
        setSubmit(false);
        navigate("/login");
      }, 1000);

      setRegister('')
    
  }

  return (
    <div className="container-fluid">
      <img className="imagen-fondo" src={fondo} />
      <div className="container-form">
        <div className="container-logo">
          <h1 className="logo">Pa'lante</h1>
        </div>
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
              errores.password = "La contraseña acepta entre 8-15 caracteres, al menos una letra mayúscula y una minúscula, dígitos y caracteres especiales"
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

            //Validacion Edad
            if (register.age == "") {
              errores.age = "Por favor, ingrese su edad"
            } else if (!/^(1[89]|[2-9]\d|\d{3,})$/.test(register.age)) {
              errores.age = "Debe ser mayor de 18 para registrarse"
            }

            //Validacion de Experiencia
            if (register.years_of_experience == "") {
              errores.years_of_experience = "Por favor, seleccione una opcion"
            }

            return errores;
          }}
        >
          {({ handleBlur, errors, touched }) => (
            <form className="form-inputs" onSubmit={ handleSubmit }>
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
                <div className="detalle-input">
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    id="exampleInputAge1"
                    placeholder="Edad"
                    aria-describedby="emailHelp"
                    value={register.age}
                    onChange={(e) => setRegister({ ...register, age: e.target.value })}
                    onBlur={handleBlur}
                  />
                  {touched.age && errors.age && <div className="alert alert-danger p-1 mt-1 border border-danger" role="alert">{errors.age}</div>}
                </div>
                <div className="detalle-input">
                  <select
                    className="select"
                    name="years_of_experience"
                    id="exampleInputExperience1"
                    placeholder="Años de Experiencia"
                    aria-describedby="emailHelp"
                    value={register.years_of_experience}
                    onChange={(e) => setRegister({ ...register, years_of_experience: e.target.value })}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled hidden>Selecciona una opcion</option>
                    <option value="0-2">0-2 años</option>
                    <option value="2-5">2-5 años</option>
                    <option value="5-10">5-10 años</option>
                    <option value="mas-de-10">Más de 10 años</option>
                  </select>
                  {touched.years_of_experience && errors.years_of_experience && <div className="alert alert-danger p-1 mt-1 border border-danger" role="alert">{errors.years_of_experience}</div>}
                </div>

              </div>
              <button className="boton-registro">Registrate</button>
              {submit && <p className="alert alert-success p-1 text-center mt-1" role="alert">Te haz registrado con exito</p>}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );

}