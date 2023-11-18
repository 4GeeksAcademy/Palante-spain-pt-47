const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      datauser: [],
      readings: [],
      podcast: [],
      meditations: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white"
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white"
        }
      ]
    },
    actions: {
      // Use getActions to call a function within a fuction
      show_readings: () => {
        fetch(process.env.BACKEND_URL + "/readings", { method: "GET" })
          .then(response => response.json())
          .then(response => {
            setStore({ readings: response })
          })
      },
      show_podcast: () => {
        fetch(process.env.BACKEND_URL + "/podcast", { method: "GET" })
          .then(response => response.json())
          .then(response => {
            setStore({ podcast: response })
          })
      },
      show_meditations: () => {
        fetch(process.env.BACKEND_URL + "/meditations", { method: "GET" })
          .then(response => response.json())
          .then(response => {
            setStore({ meditations: response })
          })
      },



      // Traer datos del usuario 
      dataUser: async () => {
        try {
          const token = sessionStorage.getItem('token');

          const resp = await fetch(process.env.BACKEND_URL + '/userdata', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": 'Bearer ' + token
            },
          });

          if (!resp.ok) {
            throw new Error("Hubo un problema al obtener los datos del usuario.");
          }
          const data = await resp.json();
          setStore({ datauser: data });
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      },

      //Envio usuario a la base de datos
      signupUser: (body) => {

        fetch(process.env.BACKEND_URL + "/userregister", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Se produjo un error en la red');
            }
          })
          .then(data => console.log(data))
          .catch(error => console.log('error', error));

      },

      //Inicio de sesion del usuario
      loginUser: async (body) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/userlogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          if (!resp.ok) {
            throw Error("Hubo un problema en la solicitud de inicio de sesión.");
          }

          if (resp.status === 401) {
            throw new Error("Credenciales no válidas");
          } else if (resp.status === 400) {
            throw new Error("Correo electrónico o contraseña no válido");
          }

          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token); // Guarda el token  
          return data;
        } catch (error) {
          console.error("Error al iniciar sesión:");
        }
      },

      //Modificacion de datos
      updateData: (body) => {
        const token = sessionStorage.getItem('token');
        
        fetch(process.env.BACKEND_URL + "/userupdate", {
          method: "POST",
          body: JSON.stringify(body),
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
          .then(data => console.log(data))
          .catch(error => console.log('error', error));

      },

      //Envio freelancer a la base de datos
      signupFreelancer: (user) => {

        fetch(process.env.BACKEND_URL + "/freelancerregister", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Se produjo un error en la red');
            }
          })
          .then(data => console.log(data))
          .catch(error => console.log('error', error));

      },

      //Inicio de sesion del freelance
      loginFreelance: async (body) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/freelancerlogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });

          if (!resp.ok) {
            throw Error("Hubo un problema en la solicitud de inicio de sesión.");
          }

          if (resp.status === 401) {
            throw new Error("Credenciales no válidas");
          } else if (resp.status === 400) {
            throw new Error("Correo electrónico o contraseña no válido");
          }

          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token); // Guarda el token en el almacenamiento 
          return data;
        } catch (error) {
          console.error("Error al iniciar sesión:");
        }
      },

      //Cierre de sesion
      borrarToken: () => {
        sessionStorage.removeItem('token');
        alert('Te has desconectado de la aplicacion')
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
          const data = await resp.json()
          setStore({ message: data.message })
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error)
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      }
    }
  };
};

export default getState;