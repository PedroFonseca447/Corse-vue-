const app = Vue.createApp({
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    addPlusFive(number) {
      this.contador += number;
    },
    addPlusOne(number) {
      this.contador += number;
    },
  },
  watch: {
    contador(newValue) {
      if (newValue > 37) {
        setTimeout(() => {
          this.contador = 0;
        }, 5000);
      }
    },
  },
});
app.mount("#events");
