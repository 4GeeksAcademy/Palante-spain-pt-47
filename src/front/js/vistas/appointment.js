
import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "../../styles/appointment.css";
import { Link } from "react-router-dom";
import readingsinicio from "../../img/readingsinicio.jpg";


export const Appointment = () => {
    const { store, actions } = useContext(Context);
    const [selectedDay1, setSelectedDay1] = useState("");
    const [selectedDay2, setSelectedDay2] = useState("");
    const [selectedDay3, setSelectedDay3] = useState("");
    const [selectedTime1, setSelectedTime1] = useState("");
    const [selectedTime2, setSelectedTime2] = useState("");
    const [selectedTime3, setSelectedTime3] = useState("");
    const [submit, setSubmit] = useState(false);
   
    const process_date = new Date();
   

    const handleDayChange1 = (date) => {
        const newSelectedDay = new Date(date);
        //console.log('date', date.format("ddd, hA"))
        console.log('newSelectedDay', newSelectedDay)
        setSelectedDay1(newSelectedDay);
    };
    const handleTimeChange1 = (time) => {
        const newSelectedTime1 = new Date(time);
        
        console.log('newSelectedTime', newSelectedTime1)
        setSelectedTime1(newSelectedTime1);
    };
    const handleDayChange2 = (date) => {
        const newSelectedDay2 = new Date(date);
        //console.log('date', date.format("ddd, hA"))
        console.log('newSelectedDay', newSelectedDay2)
        setSelectedDay2(newSelectedDay2);
    };
    const handleTimeChange2 = (time) => {
        const newSelectedTime2 = new Date(time);
        
        console.log('newSelectedTime', newSelectedTime2)
        setSelectedTime2(newSelectedTime2);
    };
    const handleDayChange3 = (date) => {
        const newSelectedDay3 = new Date(date);
        //console.log('date', date.format("ddd, hA"))
        console.log('newSelectedDay', newSelectedDay3)
        setSelectedDay3(newSelectedDay3);
    };
    const handleTimeChange3 = (time) => {
        const newSelectedTime3 = new Date(time);
        
        setSelectedTime3(newSelectedTime3);
    };
    


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
                    value={selectedDay1}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha" }}
                    onChange={handleDayChange1}
                    />
                    <Datetime className=""
                    dateFormat={false} 
                    timeFormat={true}
                    inputProps={{ id: "hora", placeholder: "Selecciona solo por hora" }}
                    value={selectedTime1}
                    onChange={handleTimeChange1}/>
                    
                    
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDay1 && selectedTime1 && (
                
                <button className="btn_cita" onClick={()=>actions.handler_appointments(1,  selectedDay1, selectedTime1, process_date)}>Enviar cita</button>
            
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
                    value={selectedDay2}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha" }}
                    onChange={handleDayChange2}
                    />
                    <Datetime 
                    dateFormat={false} 
                    timeFormat={true}
                    inputProps={{ id: "hora", placeholder: "Selecciona solo por hora" }}
                    value={selectedTime2}
                    onChange={handleTimeChange2}/>
                    
                    
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDay2 && selectedTime2 && (
                
                <button className="btn_cita" onClick={()=>actions.handler_appointments(2,  selectedDay2, selectedTime2, process_date)}>Enviar cita</button>
                
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
                    value={selectedDay3}
                    inputProps={{ id: "fecha", placeholder: "Selecciona fecha" }}
                    onChange={handleDayChange3}
                    />
                    <Datetime 
                    dateFormat={false} 
                    timeFormat={true}
                    inputProps={{ id: "hora", placeholder: "Selecciona solo por hora" }}
                    value={selectedTime3}
                    onChange={handleTimeChange3}/>
                    
                    
                {/* Mostrar la fecha seleccionada debajo del selector */}
            {selectedDay3 && selectedTime3 && (
                
                <button className="btn_cita" onClick={()=>actions.handler_appointments(3,  selectedDay3, selectedTime3, process_date)}>Enviar cita</button>
            
        )}
                </div>
                
                                
                </div>
        </div>
    );
};

	