import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import readingsinicio from "../../img/readingsinicio.jpg";
import "../../styles/events.css";
import { Actions } from "@cloudinary/url-gen";

export const Events = () => {
	const { store, actions } = useContext(Context);
 console.log(store.evento_1)
	
    return (
        <div className="container-fluid">
            <div className="introduction_meditations">
			    <img className="meditations_inicio" src={readingsinicio} alt="Readings Inicio"></img>
                <div className="meditations_tittle"><strong>Eventos Navideños</strong></div>
                <div className="explicacion_meditations">Este final de año estará especialmente dedicado a experimentar la alegria de ayudar a otros, especialmente niños y ancianos.</div>
            </div>
			
				<div class="row contenidohacemos">

					<div class="col-sm-12 col-md-4 eventos-uno">
						<h2 className="subtitulofoto"><span>Regalar</span></h2>
                        
					</div>

					<div class="col-sm-12 col-md-4 eventos-dos">
						<h2 className="subtitulofoto"><span>Cuidar</span></h2>
					</div>

					<div class="col-sm-12 col-md-4 eventos-tres">
						<h2 className="subtitulofoto"><span>Festejar</span></h2>
					</div>


				</div>
                <div class="row contenidohacemos">

                    <div class="col-sm-12 col-md-4">
                    <div class="row">
								<div class="col-sm-12 col-md-2">
								<p className="dia_event"><strong>25 </strong></p>
										<p className="mes_event">Dic 17h</p>
								</div>
								<div class="col-sm-12 col-md-8">
								<p className="evento_regalar">REGALAR  <span className="guion_evento">----</span></p>
								<p className="title_regalar">Comprar un regalo para compartir con los niños del hospital.</p>
                                <div className="cantidad_unidos d-flex">
									<p className="evento_somos">YA SOMOS </p>
									<i class="fa-solid fa-question unidos" onClick={()=>actions.get_event(1)}></i>
									<p className="cantidad_somos">{store.evento_1.length==0 ? '': store.evento_1.length}</p>
								</div>
								<button className="unirme" onClick={()=>actions.event_join(1)}>Unirme</button>
								
								</div>
								
							</div>
                    </div>

                    <div class="col-sm-12 col-md-4">
                    <div class="row">
								<div class="col-sm-12 col-md-2">
								<p className="dia_event"><strong>20 </strong></p>
										<p className="mes_event">Dic 12h</p>
								</div>
								<div class="col-sm-12 col-md-8">
								<p className="evento_regalar">CUIDAR  <span className="guion_evento">----</span></p>
								<p className="title_regalar">Una tarde de cuidados en la residencia Monte Paris.</p>
                                <div className="cantidad_unidos d-flex">
									<p className="evento_somos">YA SOMOS </p>
									<i class="fa-solid fa-question unidos" onClick={()=>actions.get_event(2)}></i>
									<p className="cantidad_somos">{store.evento_2.length==0 ? '': store.evento_2.length}</p>
								</div>
								
								<button className="unirme" onClick={()=>actions.event_join(2)}>Unirme</button>
								
								</div>
								
							</div>
                    </div>

                    <div class="col-sm-12 col-md-4">
                    <div class="row">
								<div class="col-sm-12 col-md-2">
								<p className="dia_event"><strong>30 </strong></p>
										<p className="mes_event">Dic 21h</p>
								</div>
								<div class="col-sm-12 col-md-8">
								<p className="evento_regalar">FESTEJAR <span className="guion_evento">----</span></p>
								<p className="title_regalar">Fiesta de cierre de año para todos en nuestra sede.</p>
								<div className="cantidad_unidos d-flex">
									<p className="evento_somos">YA SOMOS </p>
									<p><i class="fa-solid fa-question unidos" onClick={()=>actions.get_event(3)}></i></p>
									<p className="cantidad_somos">{store.evento_3.length==0 ? '': store.evento_3.length}</p>
								</div>
								<button className="unirme" onClick={()=>actions.event_join(3)}>Unirme  </button>
								
								</div>
								
							</div>
                    </div>
                </div>

                
			    </div>
    )
}