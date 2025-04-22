const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(number) {
        this.counter += number;

    },
    minus(number){
      this.counter -= number;
    },
    setName(nameNew){
      this.name = nameNew.target.value; // é de evento
    }

  }
 
});
 
app.mount('#events');
