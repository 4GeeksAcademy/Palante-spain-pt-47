import React, { useContext, useEffect,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/my_appointment.css";
import { Link } from "react-router-dom";
import readingsinicio from "../../img/readingsinicio.jpg";

export const My_appointment = () => {
    const { store, actions } = useContext(Context);
    
    const getNameByFreelancerId = (freelancerId) => {
        if (freelancerId === 1) {
            return 'Juana Garcia';
        } else if (freelancerId === 2) {
            return 'Juan Lopez';
        } else {
            return 'Sara Fernandez';
        }
        
    };
    
    return (
        <div className="container-fluid">
            <div className="introduction_podcast">
				<img className="citas_inicio" src={readingsinicio}></img>
				<div className="citas_tittle"><strong>Mis citas</strong></div>
				
			</div>
            <div className="row">
            
                {store.citas.map(citas => (
                    <div key={citas.id} className="col-sm-12 col-md-6">
                        <div className="col-12 datos_citas d-flex">
                            <div className="col fecha_hora_cita">
                                <p className="day_de_cita"><strong>Fecha:</strong> {citas.day}</p>
                                <p className="time_de_cita"><strong>Hora:</strong> {citas.time}</p>
                                {/* Utiliza la función para obtener el nombre */}
                                <p className=""><strong>Freelancer:</strong> {getNameByFreelancerId(citas.freelancer_id)}</p>
                            </div>
                            <div className="col-1">
                                <p><i className="fa-solid fa-trash citas"
                                onClick={() => actions.del_appointment(citas.id)}></i></p>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};