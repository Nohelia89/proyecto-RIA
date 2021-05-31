
var hat = new Vue({
    el: "#hat",
    data: {
      
     // listaVac: [],
      casa: '',
      imagen: '/media/casashat.jpg'
    },
   
  
  
    methods: {
     getCasa() {
        axios.get("https://www.potterapi.com/v1/sortinghat")
        .then((response => {
  
            console.log(`respuestaApi: `, response.data)
            this.casa = response.data
            console.log(`Variable casa cargada: `, this.casa)
            
            if (this.casa=="Gryffindor")
            this.imagen='/media/gryffindor.gif'

             
            if (this.casa=="Ravenclaw")
            this.imagen='/media/ravenclaw.gif'

            if (this.casa=="Hufflepuff")
            this.imagen='/media/hufflepuff.gif'

            if (this.casa=="Slytherin")
            this.imagen='/media/slytherin.gif'
  
         }))
     },

      //cargarVacunatorios() {
        //axios.get("http://localhost:8080/grupo15-services/rest/puestovac/vac")
          //.then((response => {
  
 //           console.log(`lista Vacunatorios: `, response.data)
   //         this.listaVac = response.data
  
  
         // }))
       // },
     // getData() {
    
    //    axios.get("http://localhost:8080/grupo15-services/rest/puestovac/asignado?vact="+this.idVac.toString()+"&date="+this.fecha.toString())
  //        .then((response => {
  
         //   console.log(`VacPuesto: `, response.data)
       //     this.vacPuesto = response.data
  
  
     //     }))
     
   
  
    }
  
  })
  