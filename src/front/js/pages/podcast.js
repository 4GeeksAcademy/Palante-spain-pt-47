import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/podcast.css";
import readingsinicio from "../../img/readingsinicio.jpg";


export const Podcast = () => {
	const { store, actions } = useContext(Context);

    
	return (
		<div className="container-fluid">
			<div className="introduction_podcast">
				<img className="podcast_inicio" src={readingsinicio}></img>
				<div className="podcast_tittle"><strong>Podcast</strong></div>
				<div className="explicacion_podcast"><strong>Nuestro equipo de colabores ha seleccionado estos podcast para ti. Esperamos que puedan acompanarte en tu vida cotidiana.</strong></div> 
			</div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {store.podcast.map(podcast => (
					<div key={podcast.id} className="col col_podcast">
						<div className="card h-60">
							<img className="img_podcast" src={podcast.URLPhoto}></img>
							<div className="card-body">
								<div className="d-flex justify-content-between">
									<h5 className="card-title">{podcast.title}</h5>
									<i
										className="fa-solid fa-heart me-3"
										//onClick={() => actions.handleAgregarFavoritos(readings.id)}
									></i>
								</div>
							</div>
							<div className="card-footer">
								<a className="escuchar" href={podcast.Urllisten}>
									Escuchar
								</a>
							</div>
						</div>
					</div>
				))}
			</div>    
            </div>
        </div>
    )   
}