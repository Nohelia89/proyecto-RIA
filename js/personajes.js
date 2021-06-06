
var harry = new Vue({ 
    el: "#harry",
    data: {
      
      listaPersonajes: []

    },
   
    mounted(){
this.getPersonajes();
    },
  
  
    methods: {
     getPersonajes() {
        axios.get("http://hp-api.herokuapp.com/api/characters")
        .then((response => {
  
            console.log(`respuestaApi: `, response.data)
            this.listaPersonajes = response.data
            console.log(`Variable lista personajes cargada: `, this.listaPersonajes)
            
           
  
         }))
     },

  
   
  
    }
  
  })
  