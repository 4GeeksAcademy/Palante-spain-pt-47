
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/readings.css";
import readingsinicio from "../../img/readingsinicio.jpg";


export const Readings = () => {
	const { store, actions } = useContext(Context);

  
	return (
		<div className="container-fluid">
			<div className="introduction_readings">
				<img className="readings_inicio" src={readingsinicio}></img>
				<div className="descarga_tittle"><strong>Descarga gratis nuestros libros</strong></div>
				<div className="explicacion_readings">Nuestro equipo de colabores ha seleccionado estos libros para ti, con información que puede favorecer tu bienestar piscológico.</div> 
			</div>
			<div className="container">
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
				{store.readings.map(readings => (
					<div key={readings.id} className="col">
						<div className="card h-100">
							<img className="img_readings" src={readings.URLPhoto}></img>
							<div className="card-body">
								<div className="d-flex justify-content-between">
									<h5 className="card-title">{readings.title}</h5>
									<i
										className="fa-solid fa-heart me-3"
										onClick={() => actions.handler_favorites_readings(readings.id)}
									></i>
								</div>
								<p className="card-text">
									{readings.review}
								</p>
							</div>
							<div className="card-footer">
								<a className="descargar" href={readings.download}>
									Descargar
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			</div>
		</div>
	);
};


