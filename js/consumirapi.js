
var key = "AIzaSyCqgFbsYgA2DgL8KeQ_f73Y0NYH1jx52gw";
var keyvid1 = "uwM2oPGQMl4";
var keyvid2 = "C8CL5TbiFwY&t=2s";
var keyvid3 = "rnrZJjacDNA";
var keyvid4 = "3EGojp4Hh6I";
var keyvid5 = "y6ZW7KXaXYk";
var keyvid6 = "tAiy66Xrsz4";
var keyvid7 = "MxqsmsA8y5k";
var keyvid8 = "ll1H-9Qm1UM";

 


var dir1 = "https://www.googleapis.com/youtube/v3/videos?id=" + keyvid1 +"&key="+key;
var dir2 = "https://www.googleapis.com/youtube/v3/videos?id=" + keyvid2 +"&key="+key;
var dir3 = "https://www.googleapis.com/youtube/v3/videos?id=" + keyvid3 +"&key="+key;
var dir4 = "https://www.googleapis.com/youtube/v3/videos?id=" + keyvid4 +"&key="+key;
var dir5 = "https://www.googleapis.com/youtube/v3/videos?id=" + keyvid5 +"&key="+key;
var dir6 = "https://www.googleapis.com/youtube/v3/videos?id=" + keyvid6 +"&key="+key;
var dir7 = "https://www.googleapis.com/youtube/v3/videos?id=" + keyvid7 +"&key="+key;
var dir8 = "https://www.googleapis.com/youtube/v3/videos?id=" + keyvid8 +"&key="+key;



var aplicacion1 = new Vue({
		el: "#aplicacion1",
		data:{
			info1: '',	},
		mounted(){
				this.carga();	
		},
		methods:{
				carga(){
					axios.get(dir1).then(respuesta=>this.info1=respuesta.data.items[0]["id"])
				},
				abrirVideo(){
					this.carga();
					$('#exampleModal1').modal('show');
				},
				cerrarVideo(){
					this.info1=null;
					$('#exampleModal1').modal('hide');
				},
			},
		})

var aplicacion2 = new Vue({
		el: "#aplicacion2",
		data:{
			info2: '',	},
		mounted(){
				this.carga();	
		},
		methods:{
				carga(){
					axios.get(dir2).then(respuesta=>this.info2=respuesta.data.items[0]["id"])
				},
				abrirVideo(){
					this.carga();
					$('#exampleModal2').modal('show');
				},
				cerrarVideo(){
					this.info2=null;
					$('#exampleModal2').modal('hide');
				},
			},
		})

var aplicacion3 = new Vue({
		el: "#aplicacion3",
		data:{
			info3: '',	},
		mounted(){
				this.carga();	
		},
		methods:{
				carga(){
					axios.get(dir3).then(respuesta=>this.info3=respuesta.data.items[0]["id"])
				},
					abrirVideo(){
					this.carga();
					$('#exampleModal3').modal('show');
				},
				cerrarVideo(){
					this.info3=null;
					$('#exampleModal3').modal('hide');
				},
			},
		})

var aplicacion4 = new Vue({
		el: "#aplicacion4",
		data:{
			info4: '',	},
		mounted(){
				this.carga();	
		},
		methods:{
				carga(){
					axios.get(dir4).then(respuesta=>this.info4=respuesta.data.items[0]["id"])
				},
					abrirVideo(){
					this.carga();
					$('#exampleModal4').modal('show');
				},
				cerrarVideo(){
					this.info4=null;
					$('#exampleModal4').modal('hide');
				},
			},
		})

var aplicacion5 = new Vue({
		el: "#aplicacion5",
		data:{
			info5: '',	},
		mounted(){
				this.carga();	
		},
		methods:{
				carga(){
					axios.get(dir5).then(respuesta=>this.info5=respuesta.data.items[0]["id"])
				},
					abrirVideo(){
					this.carga();
					$('#exampleModal5').modal('show');
				},
				cerrarVideo(){
					this.info5=null;
					$('#exampleModal5').modal('hide');
				},
			},
		})

var aplicacion6 = new Vue({
		el: "#aplicacion6",
		data:{
			info6: '',	},
		mounted(){
				this.carga();	
		},
		methods:{
				carga(){
					axios.get(dir6).then(respuesta=>this.info6=respuesta.data.items[0]["id"])
				},
					abrirVideo(){
					this.carga();
					$('#exampleModal6').modal('show');
				},
				cerrarVideo(){
					this.info6=null;
					$('#exampleModal6').modal('hide');
				},
			},
		})

var aplicacion7 = new Vue({
		el: "#aplicacion7",
		data:{
			info7: '',	},
		mounted(){
				this.carga();	
		},
		methods:{
				carga(){
					axios.get(dir7).then(respuesta=>this.info7=respuesta.data.items[0]["id"])
				},
					abrirVideo(){
					this.carga();
					$('#exampleModal7').modal('show');
				},
				cerrarVideo(){
					this.info7=null;
					$('#exampleModal7').modal('hide');
				},
			},
		})

var aplicacion8 = new Vue({
		el: "#aplicacion8",
		data:{
			info8: '',	},
		mounted(){
				this.carga();	
		},
		methods:{
				carga(){
					axios.get(dir8).then(respuesta=>this.info8=respuesta.data.items[0]["id"])
				},
				abrirVideo(){
					this.carga();
					$('#exampleModal8').modal('show');
				},
				cerrarVideo(){
					this.info8=null;
					$('#exampleModal8').modal('hide');
				},
			},
		})




