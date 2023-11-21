import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import Avatar from "/workspaces/spain_part_time47/src/front/img/avatar-dafault.png"

export const Photo = () => {
  const { store, actions } = useContext(Context);
  const inputRef = useRef(null)

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

      actions.updateData(newImage);  //Toma la URL traida de cloudinary la la almacena en la base de datos
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };
  // Traer los datos del usuario
  useEffect(() => {
    actions.dataUser();
  }, [store.datauser]);

//Cambia imagen al hacer click en ella
  const handleImage = () =>{
    inputRef.current.click();
  }

  return (
    <div className="container" onClick={handleImage}>
      <form className="form-image" onSubmit={handleSubmit}>
        {store.datauser.URLphoto ? (
          <img
          src={store.datauser.URLphoto || "" }
          alt=""
          style={{ width: 120, height: 120 }}
        /> 
        ) : (
          <img
            src={Avatar}
            alt=""
            style={{ width: 120, height: 120 }}
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