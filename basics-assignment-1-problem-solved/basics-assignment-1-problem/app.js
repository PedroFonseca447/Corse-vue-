const userData = {
    data() {
      return {
        nomeUsuario: 'Pedro Fonseca',
        idade: 22,
      };
    },
  
    methods: {
      calculaIdade(idade) {
        return idade + 5;
      },
  
      returnRandomNumber() {
        return Math.random();
      },
    }
  };
  
  Vue.createApp({
    data() {
      return {
        UserData: [userData.data()] // com U maiúsculo pra combinar com o HTML
      };
    },
  
    methods: {
      calculaIdade(idade) {
        return userData.methods.calculaIdade(idade);
      },
  
      returnRandomNumber() {
        return userData.methods.returnRandomNumber();
      }
    }
  }).mount('#assignment'); // corrigido aqui
  