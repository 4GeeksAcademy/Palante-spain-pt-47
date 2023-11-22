import React, { useContext } from "react";
import { Context } from "../store/appContext";
import home from "../../img/home.jpg";
import profesionales from "../../img/profesional.jpg";
import hacemos from "../../img/manosapoyo.jpg";
import equipo from "../../img/equipo.jpg"
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (


		<div class="contenedor">
			<div className="imagen principal" style={{ backgroundImage: `url(${home})` }}>
				<div className="col-sm-12 col-md-7 introduccion">
					<h1 className="titulo">Juntos de la mano...</h1>
					<h2 className="subtituloblanco">Pa’lante está soñada <br /> para acompañarte.</h2>
				</div>
				<div class="col-sm-12 col-md-5">
				</div>
			</div>



			<div className="container-fluid blanco">
				<div class="row contenidoconocenos">

					<div class="col-sm-12 col-md-7 iniciativa">
						<h2 className="subtitulo">CONÓCENOS</h2>
						<hr className="separador" />
						<h1 className="h1_contenido_conocenos_title"><strong>Esta iniciativa es resultado de nuestra experiencia</strong>.</h1>
						<p className="p_contenido_conocenos">Hemos soñado este proyecto porque también la hemos pasado mal, hemos perdido la esperanza y nos hemos sentido solos.</p>
						<p className="p_contenido_conocenos">Deseamos que muchos encuentren en este espacio, un lugar donde renueven las esperanzas y la alegria para seguir PA´LANTE.</p>
						<p className="p_contenido_conocenos">Queremos hacer este camino Juntos porque hemos estado donde estás.</p>

					</div>
					<div class="col-sm-12 col-md-5 manos" style={{ backgroundImage: `url(${profesionales})` }}>
					</div >

				</div>
			</div>



			<div className="container-fluid quehacemos">
				<div class="row contenidohacemos">
					<div class="col-sm-12 col-md-5 manosapoyo" style={{ backgroundImage: `url(${hacemos})` }}>
					</div>
					<div class="col-sm-12 col-md-7 textoquehacemos">
						<h2 className="subtitulo">QUE HACEMOS </h2>
						<hr className="separador" />
						<h1 className="h1_contenido_conocenos_title"><strong>Qué puedes encontrar con nosotros.</strong></h1>
						<div>
							<ul class="fa-ul">
								<li><i class="fa-li fa fa-check"></i>  <h3 className="listado">Soporte familiar</h3> <p className="p_contenido_lista">Acompañamos a las familias en sus dinámicas cotidianas, brindando recursos de afrontamiento.</p></li>
								<li><i class="fa-li fa fa-check"></i>  <h3 className="listado">Bienestar psicológico</h3> <p className="p_contenido_lista">Brindamos recursos semanales que favorecen el bienestar psicológico.</p></li>
								<li><i class="fa-li fa fa-check"></i>  <h3 className="listado">Comunidad</h3> <p className="p_contenido_lista">Hemos diseñado este espacio para que formes parte de una comunidad que camina junto a ti.</p></li>
								<li><i class="fa-li fa fa-check"></i>  <h3 className="listado">Terapia</h3> <p className="p_contenido_lista">Contamos con una familia de profesionales que esperan por ti.</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>




			<div className="container-fluid blanco">
				<div class="row contenidohacemos">

					<div class="col-12">
						<h2 className="subtitulo">PROYECTO TODO-LIST </h2>
						<hr className="separador" />
						<h1 className="h1_contenido_todolist "><strong>	Hemos pensado un espacio para tu lista de tareas PA´LANTE.</strong></h1>
					</div>

					<div class="col-sm-12 col-md-4 todolist-uno">
						<h2 className="subtitulofoto"><span>Agradecer</span></h2>
					</div>

					<div class="col-sm-12 col-md-4 todolist-dos">
						<h2 className="subtitulofoto"><span>Ejercitarse</span></h2>
					</div>

					<div class="col-sm-12 col-md-4 todolist-tres">
						<h2 className="subtitulofoto"><span>Sonreir</span></h2>
					</div>


				</div>
			</div>




			<div className="container-fluid quehacemos">
				<div class="row contenidohacemos">

					<div class="col-sm-12 col-md-7 textoequipo">
						<h2 className="subtitulo">NUESTRO EQUIPO </h2>
						<hr className="separador" />
						<h1 className="h1_contenido_conocenos_equipo"><strong>Conoce a nuestros profesionales</strong></h1>
						<p className="p_contenido_conocenos">Contamos con un equipo de profesionales y colaboradores especializados en diferentes terapias, que te ayudarán a encontrar una solución, a medida que desarrollas habilidades y rediriges el rumbo de tu vida</p>
						<h1 className="h1_contenido_conocenos_equipo"><strong>Te gustaría colaborar</strong></h1>
						<button className="btn_colaborar">Trabajar como freelancer</button>

						<div>

						</div>
					</div>
					<div class="col-sm-12 col-md-5 psicologos" style={{ backgroundImage: `url(${equipo})` }}>

					</div>
				</div>
			</div>


			<div className="container-fluid blanco">
				<div class="row contenidohacemos">
			
						<div class="col-12">
							<h1 className="h1_eventos"><strong>Nuestros eventos</strong></h1>
						</div>

						<div class="col-sm-12 col-md-6 fondo-eventos">
							<div class="row">
								<div class="col-sm-12 col-md-2">
								<p className="dia"><strong>23</strong></p>
										<p className="mes">Nov</p>
								</div>
								<div class="col-sm-12 col-md-8">
								<p className="prox_evento">PRÓXIMO EVENTO  <span className="guion">----</span></p>
											<p className="title_prox_evento">Presentación del proyecto Pa'lante</p>

								</div>
								<div class="col-sm-12 col-md-2">
								<i className="fa-solid fa-circle-right"></i>
								</div>
							</div>
						</div>


						<div class="col-sm-12 col-md-6 fondo-eventos">
							<div class="row">
								<div class="col-sm-12 col-md-2">
								<p className="dia"><strong>25</strong></p>
										<p className="mes">Dic</p>
								</div>
								<div class="col-sm-12 col-md-8">
								<p className="prox_evento">PRÓXIMO EVENTO  <span className="guion">----</span></p>
											<p className="title_prox_evento">Regalar, cuidar, festejar...</p>

								</div>
								<div class="col-sm-12 col-md-2">
								<i className="fa-solid fa-circle-right"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>

	);
};
