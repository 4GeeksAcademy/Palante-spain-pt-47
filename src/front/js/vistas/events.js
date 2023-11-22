import React, { useContext } from "react";
import { Context } from "../store/appContext";
import readingsinicio from "../../img/readingsinicio.jpg";
import "../../styles/events.css";

export const Events = () => {

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
								<p className="dia_event"><strong>25</strong></p>
										<p className="mes_event">Dic</p>
								</div>
								<div class="col-sm-12 col-md-8">
								<p className="evento_regalar">REGALAR  <span className="guion_evento">----</span></p>
								<p className="title_regalar">Comprar un regalo para compartir con los niños del hospital.</p>
                                <button className="unirme">Unirme</button>

								</div>
								
							</div>
                    </div>

                    <div class="col-sm-12 col-md-4">
                    <div class="row">
								<div class="col-sm-12 col-md-2">
								<p className="dia_event"><strong>25</strong></p>
										<p className="mes_event">Dic</p>
								</div>
								<div class="col-sm-12 col-md-8">
								<p className="evento_regalar">REGALAR  <span className="guion_evento">----</span></p>
								<p className="title_regalar">Comprar un regalo para compartir con los niños del hospital.</p>
                                <button className="unirme">Unirme</button>

								</div>
								
							</div>
                    </div>

                    <div class="col-sm-12 col-md-4">
                    <div class="row">
								<div class="col-sm-12 col-md-2">
								<p className="dia_event"><strong>25</strong></p>
										<p className="mes_event">Dic</p>
								</div>
								<div class="col-sm-12 col-md-8">
								<p className="evento_regalar">REGALAR  <span className="guion_evento">----</span></p>
								<p className="title_regalar">Comprar un regalo para compartir con los niños del hospital.</p>
                                <button className="unirme">Unirme</button>

								</div>
								
							</div>
                    </div>
                </div>

                
			    </div>
    )
}