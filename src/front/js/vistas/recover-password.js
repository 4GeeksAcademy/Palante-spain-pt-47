import React, {useState} from "react";

export const RecoverPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar la solicitud de recuperación de contraseña al servidor
      const response = await fetch('https://tu-servidor/recuperar-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // La solicitud fue exitosa, puedes redirigir al usuario a una página de confirmación
        console.log('Solicitud de recuperación de contraseña enviada con éxito');
      } else {
        // La solicitud falló, maneja el error según sea necesario
        console.error('Error al enviar la solicitud de recuperación de contraseña');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <>
    <h1>Olvide la contraseña</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Correo Electrónico:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Enviar solicitud</button>
    </form>
    </>
    
  );
}