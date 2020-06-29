import Card from '../../components/Card/Card.vue'
//Services
import Areas from '../../services/areas'

export default {
    components: {
      Card,

    },
    data () {
      return {
        arrayAreas: [],
        link : '',
        pagina: 1,
        total_paginas: null,
      }
    },
    mounted () {
      Areas.retornarAreas(this.pagina).then(resposta =>{
        this.arrayAreas = resposta.data.areas;
        this.total_paginas = resposta.data.pages
        console.log(resposta)
      })
    },
    methods: {
      atualizarLista(){
        Areas.retornarAreas(this.pagina).then(resposta =>{
          this.arrayAreas = resposta.data.areas;
        })
      },
      baixarImagens(area_id){
        Areas.baixarImagens(area_id).then(resposta =>{
          console.log(resposta)
        })
      },
      processarImagens(area_id){
        Areas.processarImagens(area_id).then(resposta =>{
          console.log(resposta)
        })
      },
    },
  }
