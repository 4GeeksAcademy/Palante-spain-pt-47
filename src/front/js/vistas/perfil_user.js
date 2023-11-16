import React, { useContext, useEffect,useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/perfil_user.css";
import logo_Perfil from "../../img/logo_Perfil.jpg"
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

// Tengo que hacer algo en la funcion de login para guardar el id

export const Perfil_user = () =>{
    const { store, actions } = useContext(Context);
    
    return (
        <div className="container-fluid">
			<div className="introduction_perfil_user">
				<img className="perfil_inicio" src={logo_Perfil}></img>
				<div className="perfil_saludo"><strong>Hola</strong></div>
			</div>

            <div className="container-fluid tarjetas">
                <div className="row tarjetas_perfil">
                    <div className="col-4 datos_personales_perfil">
                        <div className="card h-60">
                            <div className="card_dentro">
                            <i className="fa-solid fa-user perfil_user"></i>
                            <p className="datos_title_perfil"><strong>Datos Personales</strong></p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-4 datos_personales_perfil">
                        <div className="card h-60">
                            <div className="card_dentro">
                                <Link to='/favorites'>
                                <i className="fa-solid fa-calendar-check perfil_citas"></i>
                                <p className="citas_title_perfil"><strong>Mis Citas</strong></p>
                                </Link>
                            
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-4 datos_personales_perfil">
                        <div className="card h-60">
                            <div className="card_dentro">
                                <i className="fa-solid fa-heart favoritos_perfil"></i>
                                <p className="favoritos_title_perfil"><strong>Mis Favoritos</strong></p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="row tarjetas_abajo">
                <div className="col-4 datos_personales_perfil">
                        <div className="card h-60">
                            <div className="card_dentro">
                                <i className="fa-solid fa-handshake eventos_perfil"></i>
                                <p className="eventos_title_perfil"><strong>Mis Eventos</strong></p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-4 datos_personales_perfil">
                        <div className="card h-60">
                            <div className="card_dentro">
                            <i class="fa-solid fa-clipboard-list"></i>
                                <p className="todo_list_title_perfil"><strong>Mi Todo-List</strong></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}