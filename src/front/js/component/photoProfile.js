import React, { useState, useContext } from "react";
import avatar from "/workspaces/spain_part_time47/src/front/img/avatar-dafault.png"
import { Cloudinary } from "@cloudinary/url-gen";

export const Photo = () => {
  const [image, setImage] = useState(null)
  //const [urlphoto, setUrlphoto] = useState(null)

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

  /*const updatephoto = () => {
    const token = sessionStorage.getItem('token');

    fetch(process.env.BACKEND_URL + "/uploadphoto", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
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
      .then(data => setUrlphoto(data))
      .catch(error => console.log('error', error));

  }*/


return (
  <div className="container">
    <form className="form-image" >
      <img src={image} alt="" style={{ width: 120, height: 120 }} />
      <input className="select-image" type="file" name="files" onChange={(e) => setImage(e.target.files[0])} />
      {/* image ? <img alt="Preview" height="60" src={URL.createObjectURL(image)} /> : null */}
      <button type="button" onClick={handleUpload}>Subir imagen</button>
    </form>
  </div>

)
}