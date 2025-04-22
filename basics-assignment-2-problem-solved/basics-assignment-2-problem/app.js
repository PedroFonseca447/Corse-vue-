const app = Vue.createApp({
  data() {
    return {
      inputDados1: "",
      inputDados2: "",
    };
  },

  //
  computed:{ 
     //métodos chanados de forma diferente
    //aqui da para usar sem () no vue la no html, vai entenderr o q 
     alerta(){
      alert("aaaaaaa voce clicou em mim");
     }
  },
  //essa feature do vue quer um objeto e aqui voce pode definir varios metodos, aqui pode ser usar methods e computed.
  //podemos usar os mesmos nomes que nao iremos ter roblemas.
  watch:{

    name(){} //sempre que name for alterado, o watch ira ser indicado ppelo vue que foi alterado o parametro
    //o watch pega o valor de forma automatica passada pelo vue nao precisa declarar 
    //menos eficiente que as compputed
    //Sua melhor forma de uso é para controlar limitaçõs, exemlo se n chegar a 50, chama o watcher e ele para 
  },
  methods: {
    alerta() {
      alert("aaaaaaa voce clicou em mim");
    },
    receba(event) {
      console.log(event.target.value);
      this.inputDados = event.target.value;
    },
    recebaV2(event) {
      if (event) {
        this.inputDados2 = event.target.value;
      }
    },
  },
});

app.mount("#assignment");
