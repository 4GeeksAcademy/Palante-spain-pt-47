import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Photo = () => {
  const [image, setImage] = useState(null)
  const [urlphoto, setUrlphoto] = useState(null)
  const { store, actions } = useContext(Context)
  
  console.log("STORE",store.datauser);

  console.log("IMAGEN", image);

  const CLOUD_NAME = "dyiaf9ubw"
  const UPLOAD_PRESET = "dprcfccr"

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const responseData = await response.json();
      setImage(responseData.secure_url);

    } catch (error) {
      console.error("Error al subir la imagen:", error);
    }
  };
//Toma la imagen y la renderiza 
  useEffect((image) => {

    const token = sessionStorage.getItem('token');

    fetch(process.env.BACKEND_URL + "/userupdate", {
      method: "POST",
      body: JSON.stringify({'URLphoto': image}),
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + token
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Se produjo un error en la red');
        }
      })
      .then(data => {console.log("DATA",data); setUrlphoto(data.URLphoto)})
      .catch(error => console.log('error', error));
  }, [image])


  return (
    <div className="container">
      <form className="form-image" >
        <img src={urlphoto} alt="" style={{ width: 120, height: 120 }} />
        <input className="select-image" type="file" name="files" onChange={(e) => setImage(e.target.files[0])} />
        {/* image ? <img alt="Preview" height="60" src={URL.createObjectURL(image)} /> : null */}
        <button type="button" onClick={handleUpload}>Subir imagen</button>
      </form>
    </div>

  )
}