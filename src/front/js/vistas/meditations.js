import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/meditations.css";
import readingsinicio from "../../img/readingsinicio.jpg";

export const Meditations = () => {
    const { store, actions } = useContext(Context);

    const favorites_id = store.favorites_meditations.map((value, index) => value.meditations_id);

    return (
        <div className="container-fluid">
            <div className="introduction_meditations">
			
                <img className="meditations_inicio" src={readingsinicio} alt="Readings Inicio"></img>
                <div className="meditations_tittle"><strong>Meditaciones</strong></div>
                <div className="explicacion_meditations">Nuestro equipo de colaboradores ha seleccionado estos videos de meditaciones para ti. Esperamos que te ayuden a integrar tu mente y tu cuerpo.</div>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {store.meditations.map(meditations => (
                        <div key={meditations.id} className="col col_meditations">
                            <div className="card h-60">
                                <iframe src={meditations.URLVideo} allowFullScreen title="Meditation Video"></iframe>
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">{meditations.title}</h5>
                                    {favorites_id.includes(meditations.id) ?
                                        <i className="fa-solid fa-heart me-3 favorito"></i>
                                        :
                                        <i className="fa-solid fa-heart me-3" onClick={() => actions.handler_favorites_meditations(meditations.id)}></i>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
