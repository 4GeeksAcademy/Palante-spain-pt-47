import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "../../styles/appointment.css";
import { Link} from "react-router-dom";
import readingsinicio from "../../img/readingsinicio.jpg";


export const Appointment = () => {
    const { store, actions } = useContext(Context);
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [submit, setSubmit] = useState(false);
   
    const process_date = new Date();
   

    const handleDayChange = (date) => {
        const newSelectedDay = new Date(date);
        //console.log('date', date.format("ddd, hA"))
        console.log('newSelectedDay', newSelectedDay)
        setSelectedDay(newSelectedDay);
    };
    const handleTimeChange = (time) => {
        const newSelectedTime = new Date(time);
        
        console.log('newSelectedTime', newSelectedTime)
        setSelectedTime(newSelectedTime);
    };
    
	// const enviarCita = async () => {
    //     try {
    //         await actions.handler_appointments(freelancer_id, selectedDay, selectedTime, process_date);
    //         setSubmitted(true);
    //         await actions.send_mail(selectedDay, selectedTime)

    //     } catch (error) {
    //         // Manejar el error obtenido desde el backend
    //         if (error.response && error.response.status === 400 && error.response.data.msg === 'El freelancer esta ocupado') {
    //             // Muestra una alerta indicando que el freelancer está ocupado
    //             setSubmitted(false);
    //             alert('El freelancer está ocupado en este horario. Por favor, elige otro horario.');
    //         } else {
    //             // Maneja otros errores si es necesario
    //             console.error('Error:', error);
    //         }
    //     }
    // };
	// // Si submitted es true, muestra un mensaje de confirmación y redirige después de un breve retraso
	// if (submitted) {
	// 	setTimeout(() => {
    //        window.location.href = "/";
	// 	}, 2000);
	// 	return (
	// 		<div className="container">
	// 		  <div className="alert alert-warning">
	// 		  Tu cita ha sido creada.
	// 		  </div>
	// 		</div>
	// 	  );
	// 	}

    return (
        <div className="container-fluid">
            <div className="introduction_meditations">
			    <img className="citas_inicio" src={readingsinicio} alt="Readings Inicio"></img>
                <div className="citas_tittle"><strong>Nuestro equipo</strong></div>
                </div>
            <div className="row freelancer_citas">
                <div className="col-sm-12 col-md-5 ">
                    <div className="datos_freelancer_citas d-flex">
                        <img className="fot-freelancer" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <div className="datos_freelancer">
                            <p className="nombre_freelancer"><strong>Juana Maria</strong></p>
                            <p className="experticie">Depresión - Ansiedad - Duelo</p>
                            <p><i class="fa-solid fa-envelope"></i>juana@gmail.com</p>
                        </div>
                    </div>
                </div>
              
                <div className="col-sm-12 col-md-7 sacar_cita">
                    <p className="sacar_cita_p"> Agendar una cita</p>
                    <Datetime 
                    dateFormat="MM-D" 
                    timeFormat={false}
                    value={selectedDay}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha" }}
                    onChange={handleDayChange}
                    />
                    <Datetime 
                    dateFormat={false} 
                    timeFormat={true}
                    inputProps={{ id: "hora", placeholder: "Selecciona solo por hora" }}
                    value={selectedTime}
                    onChange={handleTimeChange}/>
                    
                    
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDay && selectedTime && (
                
                <button className="btn_cita" onClick={()=>actions.handler_appointments(1,  selectedDay, selectedTime, process_date)}>Enviar cita</button>
            
        )}
                </div>
                
                                
                </div>
                <div className="row freelancer_citas">
                <div className="col-sm-12 col-md-5 ">
                    <div className="datos_freelancer_citas d-flex">
                        <img className="fot-freelancer" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <div className="datos_freelancer">
                            <p className="nombre_freelancer"><strong>Juan Martin</strong></p>
                            <p className="experticie">Duelo - educación - depresión.</p>
                            <p><i class="fa-solid fa-envelope"></i>juan@gmail.com</p>
                        </div>
                    </div>
                </div>
              
                <div className="col-sm-12 col-md-7 sacar_cita">
                    <p className="sacar_cita_p"> Agendar una cita</p>
                    <Datetime 
                    dateFormat="MM-D" 
                    timeFormat={false}
                    value={selectedDay}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha" }}
                    onChange={handleDayChange}
                    />
                    <Datetime 
                    dateFormat={false} 
                    timeFormat={true}
                    inputProps={{ id: "hora", placeholder: "Selecciona solo por hora" }}
                    value={selectedTime}
                    onChange={handleTimeChange}/>
                    
                    
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDay && selectedTime && (
                
                <button className="btn_cita" onClick={()=>actions.handler_appointments(2,  selectedDay, selectedTime, process_date)}>Enviar cita</button>
                
        )}
                </div>
                
                                
                </div>


                <div className="row freelancer_citas">
                <div className="col-sm-12 col-md-5 ">
                    <div className="datos_freelancer_citas d-flex">
                        <img className="fot-freelancer" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <div className="datos_freelancer">
                            <p className="nombre_freelancer"><strong>Sara Garcia</strong></p>
                            <p className="experticie">Terapia de sentido - existencialismo.</p>
                            <p><i class="fa-solid fa-envelope"></i>sara@gmail.com</p>
                        </div>
                    </div>
                </div>
              
                <div className="col-sm-12 col-md-7 sacar_cita">
                    <p className="sacar_cita_p"> Agendar una cita</p>
                    <Datetime 
                    dateFormat="MM-D" 
                    timeFormat={false}
                    value={selectedDay}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha" }}
                    onChange={handleDayChange}
                    />
                    <Datetime 
                    dateFormat={false} 
                    timeFormat={true}
                    inputProps={{ id: "hora", placeholder: "Selecciona solo por hora" }}
                    value={selectedTime}
                    onChange={handleTimeChange}/>
                    
                    
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDay && selectedTime && (
                
                <button className="btn_cita" onClick={()=>actions.handler_appointments(3,  selectedDay, selectedTime, process_date)}>Enviar cita</button>
            
        )}
                </div>
                
                                
                </div>
        </div>
    );
};

	