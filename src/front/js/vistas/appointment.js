import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "../../styles/appointment.css";
import { Link} from "react-router-dom";


export const Appointment = () => {
    const { store, actions } = useContext(Context);
    const [selectedDate, setSelectedDate] = useState("");
    const freelancer_id = 1
    const process_date = new Date();
    const [submitted, setSubmitted] = useState(false);

    const handleDateChange = (date) => {
        const newSelectedDate = new Date(date);
        //console.log('date', date.format("ddd, hA"))
        console.log('newSelectedDate', newSelectedDate)
        setSelectedDate(newSelectedDate);
    };

    
	const enviarCita = () => {
		
        actions.handler_appointments(freelancer_id,selectedDate,process_date)
		  setSubmitted(true);
		}
	// Si submitted es true, muestra un mensaje de confirmación y redirige después de un breve retraso
	if (submitted) {
		setTimeout(() => {
           window.location.href = "/";
		}, 2000);
		return (
			<div className="container">
			  <div className="alert alert-warning">
			  Tu cita ha sido creada.
			  </div>
			</div>
		  );
		}

    return (
        <div className="container">
            <div className="row freelancer_citas">
                <div className="col-5">
                    <div className="datos_freelancer_citas d-flex">
                        <img className="fot-freelancer" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <div className="datos_freelancer">
                            <p className="nombre_freelancer"><strong>Juana Maria</strong></p>
                            <p className="experticie">Depresion - Ansiedad - Duelo</p>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <p className="sobre_freelancer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
                <div className="col-4"></div>
                <div className="col-4 sacar_cita">
                    <p className="sacar_cita_p"> Agendar una cita</p>
                    <Datetime
                    input={true}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha y hora" }}
                    value={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM-D" timeFormat={true}
                />
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDate && (
                
                <button className="btn_cita" onClick={enviarCita}>Enviar cita</button>
            
        )}
                </div>
                
                <div className="col-4"></div>
            </div>
            <div className="row freelancer_citas">
                <div className="col-5">
                    <div className="datos_freelancer_citas d-flex">
                        <img className="fot-freelancer" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <div className="datos_freelancer">
                            <p className="nombre_freelancer"><strong>Juana Maria</strong></p>
                            <p className="experticie">Depresion - Ansiedad - Duelo</p>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <p className="sobre_freelancer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
                <div className="col-4"></div>
                <div className="col-4 sacar_cita">
                    <p className="sacar_cita_p"> Agendar una cita</p>
                    <Datetime
                    input={true}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha y hora" }}
                    value={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM-D" timeFormat={true}
                />
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDate && (
                
                <button className="btn_cita" onClick={()=>actions.handler_appointments(freelancer_id,selectedDate,process_date)}>Enviar cita</button>
            
        )}
                </div>
                
                <div className="col-4"></div>
            </div>
            <div className="row freelancer_citas">
                <div className="col-5">
                    <div className="datos_freelancer_citas d-flex">
                        <img className="fot-freelancer" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <div className="datos_freelancer">
                            <p className="nombre_freelancer"><strong>Juana Maria</strong></p>
                            <p className="experticie">Depresion - Ansiedad - Duelo</p>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <p className="sobre_freelancer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
                <div className="col-4"></div>
                <div className="col-4 sacar_cita">
                    <p className="sacar_cita_p"> Agendar una cita</p>
                    <Datetime
                    input={true}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha y hora" }}
                    value={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM-D" timeFormat={true}
                />
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDate && (
                
                <button className="btn_cita" onClick={()=>actions.handler_appointments(freelancer_id,selectedDate,process_date)}>Enviar cita</button>
            
        )}
                </div>
                
                <div className="col-4"></div>
            </div>
            
            
        </div>
    );
};

		