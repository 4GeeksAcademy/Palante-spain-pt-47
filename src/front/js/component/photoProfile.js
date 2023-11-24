import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import Avatar from "../../img/avatar-dafault.png"

export const Photo = () => {
  const { store, actions } = useContext(Context);
  const inputRef = useRef(null)

  console.log("store foto", store);

  const CLOUD_NAME = "dyiaf9ubw"
  const UPLOAD_PRESET = "dprcfccr"
  // Guardar en la base de datos la URL que manda Cloudinary
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json(); //Aca esta la URL que se va a guardar
      const newImage = { URLphoto: responseData.secure_url };

      actions.updateData(newImage); //Toma la URL traida de cloudinary la la almacena en la base de datos
      actions.dataUser();  // Traer la imagen del usuario
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };

//Cambia imagen al hacer click en ella
  const handleImage = () =>{
    inputRef.current.click();
  }

  return (
    <div className="container" onClick={handleImage}>
      <form className="form-image" onSubmit={handleSubmit}>
        {store.datauser.URLphoto ? (
          <img className="img-profile"
          src={store.datauser.URLphoto || "" }
          alt=""
        /> 
        ) : (
          <img className="img-profile"
            src={Avatar}
            alt=""
          />
        )}
        
        <input
          className="select-image"
          type="file"
          name="files"
          onChange={handleSubmit}
          ref={inputRef}
          style={{display: "none"}}
        />
      </form>
    </div>
  );
};