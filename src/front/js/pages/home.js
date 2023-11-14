import React, { useContext } from "react";
import { Context } from "../store/appContext";
import home from "../../img/home.jpg";

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
					<div class="row">
						<div class="col-7">
							<h2 className="subtitulo">CONÓCENOS</h2>
							<hr className="separador" />
							<h1 className="h1_contenido_conocenos_title"><strong>Esta iniciativa es resultado de nuestra experiencia</strong>.</h1>
							<p className="p_contenido_conocenos">Hemos soñado este proyecto porque también la hemos pasado mal, hemos perdido la esperanza y nos hemos sentido solos.</p>
							<p className="p_contenido_conocenos">Deseamos que muchos encuentren en este espacio, un lugar donde renueven las esperanzas y la alegria para seguir PA´LANTE.</p>
							<p className="p_contenido_conocenos">Queremos hacer este camino Juntos porque hemos estado donde estás.</p>

						</div>
						<div class="col-5">
							<img className="profesionales" src="https://img.freepik.com/fotos-premium/relaciones-concepto-amor-cierre-manos-pareja-mostrando-equipo-recorte-papel_380164-48468.jpg?w=360"></img>
						</div></div>
				</div></div>



			<div className="container-fluid quehacemos">
				<div class="row contenidohacemos">
					<div class="col-5">
						<img className="manos" src="https://img.freepik.com/fotos-premium/madre-e-hija-tocando-manos_13339-279809.jpg?w=360"></img>
					</div>
					<div class="col-7 textoquehacemos">
						<h2 className="subtitulo">QUE HACEMOS </h2>
						<hr className="separador" />
						<h1 className="h1_contenido_conocenos_title"><strong>Qué puedes encontrar con nosotros.</strong></h1>
						<div>
							<ul class="fa-ul">
								<li><i class="fa-li fa fa-check"></i>  <h3 className="listado">Soporte familiar</h3> <p>Acompañamos a las familias en sus dinámicas cotidianas, brindando recursos de afrontamiento.</p></li>
								<li><i class="fa-li fa fa-check"></i>  <h3 className="listado">Bienestar psicológico</h3> <p>Brindamos recursos semanales que favorecen el bienestar psicológico.</p></li>
								<li><i class="fa-li fa fa-check"></i>  <h3 className="listado">Comunidad</h3> <p>Hemos diseñado este espacio para que formes parte de una comunidad que camina junto a ti.</p></li>
								<li><i class="fa-li fa fa-check"></i>  <h3 className="listado">Terapia</h3> <p>Contamos con una familia de profesionales que esperan por ti.</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>




			<div className="container-fluid blanco">
				<div class="row contenidohacemos">
					<div class="row">
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
			</div>




			<div className="container-fluid quehacemos">
				<div class="row contenidohacemos">

					<div class="col-7 textoequipo">
						<h2 className="subtitulo">NUESTRO EQUIPO </h2>
						<hr className="separador" />
						<h1 className="h1_contenido_conocenos_equipo"><strong>Conoce a nuestros profesionales</strong></h1>
						<p className="equipo">Contamos con un equipo de profesionales y colaboradores especializados en diferentes terapias, que te ayudarán a encontrar una solución, a medida que desarrollas habilidades y rediriges el rumbo de tu vida</p>
						<h1 className="h1_contenido_conocenos_equipo"><strong>Te gustaría colaborar</strong></h1>
						<button className="btn_colaborar">Trabajar como freelancer</button>

						<div>

						</div>
					</div>

					<div class="col-5">
						<img className="psicologos" src="https://img.freepik.com/fotos-premium/collage-retratos-grupales-jovenes-multiculturales-multirraciales-sonrientes-caras-fondo-pancarta_770123-1904.jpg?w=2000"></img>
					</div>
				</div>
			</div>


			<div className="container-fluid blanco">
				<div class="row contenidohacemos">
					<div class="row">
						<div class="col-12">
							<h1 className="h1_contenido_todolist"><strong>Nuestros eventos</strong></h1>
						</div>
						<div class="col-6 col-md-12">
							<div className="container_evento_1">
								<div className="evento_1 d-flex">
									<div className="evento_1_fecha">
										<p className="dia"><strong>23</strong></p>
										<p className="mes">Nov</p>
									</div>
									<div className="proximo_evento">
										<div className="arriba_prox_evento d-flex">
											<p className="prox_evento">PRÓXIMO EVENTO</p>
											<p className="linea_evento">____</p>
										</div>

										<p className="title_prox_evento">Presentación del proyecto Pa'lante</p>

									</div>
									<div>
										<p className="ir_evento"><i class="fa-solid fa-circle-right"></i></p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-6 col-md-12">
							<div className="container_evento_1">
								<div className="evento_1 d-flex">
									<div className="evento_1_fecha">
										<p className="dia"><strong>15</strong></p>
										<p className="mes">Dic</p>
									</div>
									<div className="proximo_evento">
										<div className="arriba_prox_evento d-flex">
											<p className="prox_evento">PRÓXIMO EVENTO</p>
											<p className="linea_evento">____</p>
										</div>

										<p className="title_prox_evento">Conferencia con Dr.Manuel Maza</p>

									</div>
									<div>
										<p className="ir_evento"><i class="fa-solid fa-circle-right"></i></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	);
};
