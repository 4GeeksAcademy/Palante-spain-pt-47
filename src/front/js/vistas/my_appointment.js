import React, { useContext, useEffect,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/my_appointment.css";
import { Link } from "react-router-dom";

export const My_appointment = () => {
    const { store, actions } = useContext(Context); 

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="mis_citas">Mis citas</p>
                </div>
                
                {store.citas.map(citas => (
					<div key={citas.id} className="col-12">
                        <div className="datos_citas d-flex">
                        <p className="date_de_cita">Agendada para {citas.date}</p>
                        <Link to={`/my_appointment/${citas.id}`}>
                        <p><i class="fa-solid fa-pen-to-square"></i></p>
                        </Link> 
                        
                        <p><i className="fa-solid fa-trash"></i></p>

                        </div>
                    </div>

                    
                
                ))}
            </div>
        </div>
       
        
    )
}