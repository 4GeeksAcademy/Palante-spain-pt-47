import React from "react";
import { useForm } from "react-hook-form";

export const Home = () => {

    const { register, formState: {errors}, handleSubmit } = useForm();

    const submit = (data) =>{
        console.log("ACA LA DATA", data);
    }
    return (
        <div className="container-fluid">
            <div className="container-form">
                <div className="container-logo">
                    <h1 className="logo">Pa'lante</h1>
                </div>
                <form className="form" onSubmit={handleSubmit(submit)}>
                    <div className="container-inputs">
                        <div>
                            <input type="name" className="form-control" name="full name" id="exampleInputName1" placeholder="Nombre Completo" aria-describedby="emailHelp" {...register('Nombre', {required: true})} />
                            {errors.Nombre?.type === 'required' && <p>Nombre es obligatorio</p> }
                        </div>
                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" placeholder="Correo Electrónico" aria-describedby="emailHelp" {...register('Correo Electronico', {required: true})} />
                        <input type="password" className="form-control" name="Password" id="exampleInputPassword1" placeholder="Contraseña" aria-describedby="emailHelp" {...register('Contraseña', {required: true})} />
                        <input type="password" className="form-control" name="Confirm Password" id="exampleInputPassword2" placeholder="Repetir Contraseña" aria-describedby="emailHelp" {...register('Repetir contraseña', {required: true})} />
                    </div>
                    <button className="login">Registrate</button>
                </form>
            </div>
        </div>
    )
}