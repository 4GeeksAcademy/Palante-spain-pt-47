import React, {useContext, useState, useEffect}  from 'react'
import { Context } from "../store/appContext";

export const Updatepassword = () => {

  const { store, actions } = useContext(Context)
console.log("STORE", store.datauser);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCurrentPasswordChange = (e) => setCurrentPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handlePasswordChange = (e) => {
    e.preventDefault();
  
    // Realiza la lógica para cambiar la contraseña en el servidor aquí.
    // Utiliza una función o servicio específico para cambiar la contraseña.
    actions.updateData({ currentPassword, newPassword });
  };

  useEffect(() => {
    setNewPassword({
      password: store.datauser.password
    });
  }, [store.datauser])

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        cambiar contraseña
      </button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="form-data" onSubmit={handlePasswordChange}>
                <div className="detalle-input">
                  <input
                    type="password"
                    className="form-control"
                    name="currentPassword"
                    placeholder="Contraseña Actual"
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                  />
                </div>
                <div className="detalle-input">
                  <input
                    type="password"
                    className="form-control"
                    name="newPassword"
                    placeholder="Nueva Contraseña"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                </div>
                <div className="detalle-input">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirmar Nueva Contraseña"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <button className="boton-actualizar" >{/*{disabled={!isPasswordValid}*/}
                  Cambiar Contraseña
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar cambios</button>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

