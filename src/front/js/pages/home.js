import React, { useContext } from "react";
import { Context } from "../store/appContext";
import home from "../../img/home.jpg";
import profesionales from "../../img/profesionales.png";
import nosotros from "../../img/nosotros.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container_Landing_Page">
			<div className="row_Landig_Page">
				<div className="col_juntos">
					<img className="imgHome" src={home}></img>
					<div className="juntos"><strong>Juntos de la mano...</strong></div>
					<div className="juntos1"><strong>Pa’lante</strong> está soñada para acompañarte.</div>
				</div>
				<div className="container_conocenos d-flex">
					<div className="col_conocenos_right">
						<div className="title_conocenos d-flex">
							<p className="linea_conocenos">_____</p>
							<p className="conocenos">CONÓCENOS</p>
						</div>
						<div className="col_contenido_conocenos">
							<h1 className="h1_contenido_conocenos_title"><strong>Esta iniciativa es resultado de nuestra experiencia</strong>.</h1>
							<p className="p_contenido_conocenos">Hemos soñado este proyecto porque también la hemos pasado mal, hemos perdido la esperanza y nos hemos sentido solos.<br></br> 
Deseamos que muchos encuentren en este espacio, un lugar donde renueven las esperanzas y la alegria para seguir PA´LANTE.<br></br>
Queremos hacer este camino Juntos porque hemos estado donde estás.</p>
						</div>
					</div>
					<div className="img_conocenos">
						<img className="conocenos_profesionales" src={nosotros}></img>
					</div>
				</div>
			
				<div className="container_hacemos d-flex">
                    <div className="col_hacemos_right">
                       <div className="title_conocenos d-flex">
                            <p className="linea_conocenos">_____</p>
                            <p className="conocenos">QUÉ HACEMOS</p>
                        </div>

                       <div className="col_contenido_hacemos">
                            <h1 className="h1_contenido_hacemos_title"><strong>Qué puedes encontrar con nosotros.</strong></h1>
                            <div className="lista_hacemos d-flex">
                                <p><i class="fa-solid fa-house"></i></p>
                                <h3 className="soporte">Soporte familiar</h3>
                            </div>
                            <div>
                                <p className="explicacion_li_hacemos">Acompañamos a las familias en sus dinámicas cotidianas, brindando recursos de afrontamiento.</p>
                            </div>
                            <div className="lista_hacemos d-flex">
                                <p><i class="fa-solid fa-house"></i></p>
                                <h3 className="soporte">Bienestar psicológico</h3>
                            </div>
                            <div>
                                <p className="explicacion_li_hacemos">Brindamos recursos semanales que favorecen el bienestar psicológico.</p>
                            </div>
                            <div className="lista_hacemos d-flex">
                                <p><i class="fa-solid fa-house"></i></p>
                                <h3 className="soporte">Comunidad</h3>
                            </div>
                            <div>
                                <p className="explicacion_li_hacemos">Hemos diseñado este espacio para que formes parte de una comunidad que camina junto a ti.</p>
                            </div>
                            <div className="lista_hacemos d-flex">
                                <p><i class="fa-solid fa-house"></i></p>
                                <h3 className="soporte">Terapia</h3>
                            </div>
                            <div>
                                <p className="explicacion_li_hacemos">Contamos con una familia de profesionales que esperan por ti.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
					<div className="img_conocenos">
                        <img className="img_hacemos" src="https://images.pexels.com/photos/10435733/pexels-photo-10435733.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                    </div>


                    
                </div>
				</div>

				<div className="col_todo_list">
					<div className="title_conocenos d-flex">
						<p className="linea_conocenos">_____</p>
						<p className="conocenos">PROYECTO TODO-LIST</p>
					</div>
					<div className="col_contenido_conocenos">
							<h1 className="h1_contenido_todolist_title"><strong>Hemos pensado un espacio para tu lista de tareas PA´LANTE.</strong></h1>
					</div>
					<div className="container_img_todolist d-flex">
						<div className="todolist_agradecer">
							<img className="img_agradecer" src="https://images.pexels.com/photos/9035958/pexels-photo-9035958.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
							<div className="agradecer"><strong>Agradecer</strong></div>
						</div>
						<div className="todolist_ejercitarse">
							<img className="img_ejercitarse" src="https://images.pexels.com/photos/7210602/pexels-photo-7210602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
							<div className="ejercitarse"><strong>Ejercitarse</strong></div>
						</div>
						<div className="todolist_sonreir">
							<img className="img_sonreir" src="https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
							<div className="sonreir"><strong>Sonreir</strong></div>
						</div>
					</div>
				</div>
				<div className="container_equipo d-flex">
					<div className="equipo_right">
						<div className="title_equipo d-flex">
								<p className="linea_conocenos">_____</p>
								<p className="conocenos">NUESTRO EQUIPO</p>
						</div>
						<div className="col_equipo d-flex">
							<div className="col_equipo_right">
								<div className="col_contenido_equipo">
									<h1 className="h1_contenido_equipo_title"><strong>Conoce a nuestros Profesionales.</strong></h1>
									<p className="contenido_equipo">Contamos con un equipo de profesionales y colaboradores especializados en diferentes terapias, que te ayudarán a encontrar una solución, a medida que desarrollas habilidades y rediriges el rumbo de tu vida</p>
									<p className="colaborar"><strong>¿Te gustaría colaborar?</strong></p>
									<button className="btn_colaborar">Trabajar como freelancer</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col_equipo_left">
						<img className="img_equipo" src={profesionales}></img>
					</div>
				</div>
				<div className="col_eventos">
					<div className="title_eventos">
						<h1 className="h1_title_eventos">Nuestros eventos</h1>
					</div>
					<div className="propuesta_eventos d-flex">
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
	);
};
