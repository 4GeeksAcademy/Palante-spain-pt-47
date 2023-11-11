import React, { useContext } from "react";
import { Context } from "../store/appContext";
import imgHome from "../../img/imgHome.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container_Landing_Page">
			<div className="row_Landig_Page">
				<div className="col_juntos">
					<img className="imgHome" src={imgHome}></img>
				</div>
				<div className="title_conocenos d-flex">
							<p className="linea_conocenos">_________</p>
							<p className="conocenos">CONOCENOS</p>
						</div>
				<div className="col_conocenos d-flex">
					<div className="col_conocenos_right">
						
						<div className="col_contenido_conocenos">
							<h1 className="h1_contenido_conocenos_title">Esta iniciativa es resultado de nuestra experiencia.</h1>
							<p className="p_contenido_conocenos">Hemos soñado este proyecto porque también la hemos pasado mal, hemos perdido la esperanza y nos hemos sentido solos.<br></br> 
Deseamos que muchos encuentren en este espacio, un lugar donde renueven las esperanzas y la alegria para seguir PA´LANTE.<br></br>
Queremos hacer este camino Juntos porque hemos estado donde estás.</p>
						</div>
					</div>
					
					<div className="img_conocenos">
						<img src="https://media.istockphoto.com/id/1368965646/es/foto/chicos-y-chicas-multi%C3%A9tnicos-que-se-toman-selfies-al-aire-libre-con-luz-de-fondo-concepto-de.jpg?s=612x612&w=0&k=20&c=QC9JqaBFDnZZtwutt6bvGFLXmmtbv9e355syXsG39KE="></img>
					</div>
				</div>
				<div className="col_que_hacemos">
					
				</div>
				<div className="col">
					
				</div>
				<div className="col">
					
				</div>
				<div className="col">
					
				</div>

			</div>
		</div>
	);
};
