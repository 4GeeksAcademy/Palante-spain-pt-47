const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			readings:[],
			podcast:[],
			meditations:[],
      favorites_readings:[],
      favorites_podcast:[],
      favorites_meditations:[],
      user_login: sessionStorage.getItem('token'),
      citas:[],
      
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
				fetch(process.env.BACKEND_URL + "/readings", {method: "GET"})
				.then (response => response.json())
				.then (response => {
					console.log("readings", response)
					setStore({readings:response})
				})
			},
			show_podcast: () => {
				fetch(process.env.BACKEND_URL + "/podcast", {method: "GET"})
				.then (response => response.json())
				.then (response => {
					console.log("podcast", response)
					setStore({podcast:response})
				})
			},
			show_meditations: () => {
				fetch(process.env.BACKEND_URL + "/meditations", {method: "GET"})
				.then (response => response.json())
				.then (response => {
					console.log("meditations", response)
					setStore({meditations:response})
				})
			},
      
      //agregar un favorito a readings
      handler_favorites_readings: async (reading_id) => {
        const token = sessionStorage.getItem('token');
       
        const resp = await fetch(process.env.BACKEND_URL + '/favorites_readings', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
                },
                body: JSON.stringify({ 'reading_id': reading_id }), // Envía el ID del artículo que se agregará a favoritos
            })
                
        },
        //mostrar los favorites readings de un user
        get_favorites_readings: async () => {
          const token = sessionStorage.getItem('token');
         
          const resp = await fetch(process.env.BACKEND_URL + '/favorites_readings', {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": 'Bearer '+token
              },
          })
          .then(response => response.json())
          .then(async response => {
              const favorites = response.inf;
              const favoriteReadings = [];

                 for (const favorite of favorites) {
                  const readingResp = await fetch(process.env.BACKEND_URL + `/readings/${favorite.reading_id}`, {
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json",
                          "Authorization": 'Bearer '+token
                      },
                  });
                  const readingData = await readingResp.json();
                  console.log('readingData',readingData)
                  
                  favoriteReadings.push({
                      id: favorite.id,
                      user_id: favorite.user_id,
                      reading_id: favorite.reading_id,
                      title: readingData.inf.title ,
                      URLPhoto:readingData.inf.URLPhoto,
                      download:readingData.inf.download
                  });
              }
              setStore({ favorites_readings: favoriteReadings });
          })
          .catch(error => {
              console.error("Error getting favorite readings:", error);
          });
      },

        //agregar un favorito a meditations
        handler_favorites_meditations: async (meditations_id) => {
          const token = sessionStorage.getItem('token');
         
          const resp = await fetch(process.env.BACKEND_URL + '/favorites_meditations', {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
                  },
                  body: JSON.stringify({ 'meditations_id': meditations_id }), // Envía el ID del artículo que se agregará a favoritos
              })
                  
          },

      //mostrar los favorites meditations de un user
      get_favorites_meditations: async () => {
        const token = sessionStorage.getItem('token');
       
        const resp = await fetch(process.env.BACKEND_URL + '/favorites_meditations', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+token
            },
        })
        .then(response => response.json())
        .then(async response => {
            const favorites = response.inf;
            const favoriteMeditations = [];

               for (const favorite of favorites) {
                const meditationsResp = await fetch(process.env.BACKEND_URL + `/meditations/${favorite.meditations_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": 'Bearer '+token
                    },
                });
                const meditationData = await meditationsResp.json();
                console.log('meditationData',meditationData)
                
                favoriteMeditations.push({
                    id: favorite.id,
                    user_id: favorite.user_id,
                    meditations_id: favorite.meditations_id,
                    title: meditationData.inf.title ,
                    URLVideo:meditationData.inf.URLVideo
                    
                });
            }
            setStore({ favorites_meditations: favoriteMeditations });
        })
        .catch(error => {
            console.error("Error getting favorite meditations:", error);
        });
    },
        //agregar un favorito a podcast
        handler_favorites_podcast: async (podcast_id) => {
          const token = sessionStorage.getItem('token');
         
          const resp = await fetch(process.env.BACKEND_URL + '/favorites_podcast', {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
                  },
                  body: JSON.stringify({ 'podcast_id': podcast_id }), // Envía el ID del artículo que se agregará a favoritos
              })
                  
          },
      //mostrar los favorites podcast de un user
      get_favorites_podcast: async () => {
        const token = sessionStorage.getItem('token');
      
        const resp = await fetch(process.env.BACKEND_URL + '/favorites_podcast', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+token
            },
        })
        .then(response => response.json())
        .then(async response => {
            const favorites = response.inf;
            const favoritePodcast = [];

              for (const favorite of favorites) {
                const podcastResp = await fetch(process.env.BACKEND_URL + `/podcast/${favorite.podcast_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": 'Bearer '+token
                    },
                });
                const podcastData = await podcastResp.json();
                console.log('podcastData',podcastData)
                
                favoritePodcast.push({
                    id: favorite.id,
                    user_id: favorite.user_id,
                    podcast_id: favorite.podcast_id,
                    title: podcastData.inf.title ,
                    URLPhoto:podcastData.inf.URLPhoto,
                    URLListen:podcastData.inf.URLListen
                });
            }
            setStore({ favorites_podcast: favoritePodcast });
        })
        .catch(error => {
            console.error("Error getting favorite podcast:", error);
        });
      },

      //Borrar un favorito de readings
      del_favorites_readings: async (favorites_readings_id) => {
        const token = sessionStorage.getItem('token');
       
        const resp = await fetch(process.env.BACKEND_URL + `/favorites_readings/${favorites_readings_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
                },
              })
              await getActions().get_favorites_readings();
                         
        },

        //Borrar un favorito de podcast
      del_favorites_podcast: async (favorites_podcast_id) => {
        const token = sessionStorage.getItem('token');
       
        const resp = await fetch(process.env.BACKEND_URL + `/favorites_podcast/${favorites_podcast_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
                },
              })
              await getActions().get_favorites_podcast();
                         
        },
           //Borrar un favorito de meditations
      del_favorites_meditations: async (favorites_meditations_id) => {
        const token = sessionStorage.getItem('token');
       
        const resp = await fetch(process.env.BACKEND_URL + `/favorites_meditations/${favorites_meditations_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
                },
              })
              await getActions().get_favorites_meditations();
                         
        },
        
      //agregar una cita
      handler_appointments: async (freelancer_id, selectedDate, process_date) => {
        const token = sessionStorage.getItem('token');
        console.log('freelancer_id', freelancer_id)
        console.log('selectedDate', selectedDate)
        console.log('full_date', process_date)
        const resp = await fetch(process.env.BACKEND_URL + `/appointment/${freelancer_id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
                },
                body: JSON.stringify({ "date":selectedDate, "full_date":process_date }), // Envía el ID del artículo que se agregará a favoritos
            })
                
        },
      
      // ver todas las citas de un usuario
			get_citas: async () => {
        const token = sessionStorage.getItem('token');
      
        const resp = await fetch(process.env.BACKEND_URL + '/appointments', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+token
            },
        })
        .then(response => response.json())
        .then(async response => {
          console.log('response de citas', response)
          const citas = response.inf
          setStore({ citas: citas});
            
        })
        .catch(error => {
            console.error("Error getting favorite meditations:", error);
        });
    },

    // modificar la cita de un usuario
			update_citas: async (cita_id, date, full_date) => {
        const token = sessionStorage.getItem('token');
      
        const resp = await fetch(process.env.BACKEND_URL + `/appointment/${cita_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer '+token
            },
            body: JSON.stringify({ 'date': date, 'full_date':full_date })
        })
        
    },



      

			
        //Envio usuario a la base de datos

      signupUser: (user) => {

        fetch(process.env.BACKEND_URL + "/userregister", {
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
          if (!resp.ok) {
            throw Error("Hubo un problema en la solicitud de inicio de sesión.");
          }
              
          
          const data = await resp.json();
          console.log('data', data)
          sessionStorage.setItem("token", data.access_token); // Guarda el token en el almacenamiento 
          setStore({user_login:sessionStorage.getItem('token')});
          
          
          await getActions().get_favorites_readings();
          await getActions().get_favorites_meditations();
          await getActions().get_favorites_podcast();
          return data;
        } catch (error) {
          console.error("Error al iniciar sesión:");
        }

        
        
      },

     

      //Ejecuta para redirigir a una pagina privada (solo se accede si estas logeado)

      loginPrivate: async () => {
        const token = sessionStorage.getItem('token');

        const resp = await fetch(process.env.BACKEND_URL + "/private", {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + token // ⬅⬅⬅ authorization token
          }
        })
        if (resp.status === 403) {
          throw Error("Missing or invalid token");
        } else if (resp.status !== 200) {
          throw Error("Unknown error");
        }


        const data = await resp.json();
        console.log("This is the data you requested", data);
        return data

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
        setStore({user_login:null})
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