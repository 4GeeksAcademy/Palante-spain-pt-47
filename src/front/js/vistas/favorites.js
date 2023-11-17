import React, { useContext, useEffect,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";
import logo_Perfil from "../../img/logo_Perfil.jpg"
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

// Tengo que hacer algo en la funcion de login para guardar el id

export const Favorites = () =>{
    const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.get_favorites_readings();
	  }, []);
   
    return (
        <div className="container-fluid">
			<div className="container-fluid favorites_readings">
                <div className="favorites_readings_title"><strong>Mis lecturas favoritas</strong></div>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-1">
                {store.favorites_readings.map(favorites_readings => (
					<div key={favorites_readings.id} className="col col_podcast">
						<div className="card h-60">
							<img className="img_favorites_readings" src={favorites_readings.URLPhoto}></img>
							<div className="card-body favorites_reading d-flex">
								<div>
									<h5 className="title_favorites_readings">{favorites_readings.title}</h5>
                                </div>
                                <div>
									<p><i className="fa-solid fa-trash"
									onClick={() => actions.del_favorites_readings(favorites_readings.id)}></i></p>
                                </div>
								
							</div>
							<div className="card_favorites_readings">
                            <a className="descargar_favorites_readings" href={favorites_readings.download}>
									Descargar
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
		<div className="container-fluid favorites_podcast">
                <div className="favorites_readings_title"><strong>Mis podcast favoritos</strong></div>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-1">
                {store.favorites_podcast.map(favorites_podcast => (
					<div key={favorites_podcast.id} className="col col_podcast">
						<div className="card h-60">
							<img className="img_favorites_readings" src={favorites_podcast.URLPhoto}></img>
							<div className="card-body favorites_reading d-flex">
								<div>
									<h5 className="title_favorites_readings">{favorites_podcast.title}</h5>
                                </div>
                                <div>
									<p><i class="fa-solid fa-trash"></i></p>
                                </div>
								
							</div>
							<div className="card_favorites_readings">
                            <a className="descargar_favorites_readings" href={favorites_podcast.URLListen}>
									Escuchar
								</a>
							</div>
						</div>
					</div>
				))}
			</div>        
            </div>
			<div className="container-fluid favorites_meditations">
                <div className="favorites_readings_title"><strong>Mis meditaciones favoritas</strong></div>
                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-1">
                {store.favorites_meditations.map(favorites_meditations => (
					<div key={favorites_meditations.id} className="col col_podcast">
						<div className="card h-60">
							<iframe  src={favorites_meditations.URLVideo} allowfullScreen></iframe>
							<div className="card-body favorites_reading d-flex">
								<div>
									<h5 className="title_favorites_readings">{favorites_meditations.title}</h5>
                                </div>
                                <div>
									<p><i class="fa-solid fa-trash"></i></p>
                                </div>
								
							</div>
							
						</div>
					</div>
				))}
			</div>        
            </div>
        </div>
    )   
	
}