
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/readings.css";



export const Readings = () => {
	const { store, actions } = useContext(Context);

    
	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{store.readings.map(readings => (
					<div key={readings.id} className="col">
						<div className="card h-100">
							<img src={readings.URLPhoto} style={{ width: '353px', height: '372px' }}></img>
							<div className="card-body">
								<div className="d-flex justify-content-between">
									<h5 className="card-title">{readings.title}</h5>
									<i
										className="fa-solid fa-heart me-3"
										//onClick={() => actions.handleAgregarFavoritos(readings.id)}
									></i>
								</div>
								<p className="card-text">
									{readings.review}
								</p>
							</div>
							<div className="card-footer">
								<a href={readings.download}>
									Descargar
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};


