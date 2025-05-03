function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  //nice practice
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    isSpecialAttackDisabled() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    winnerPlaer(value) {
      if ((value <= 0) & (this.monsterHealth <= 0)) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      } else {
        this.winner = "player";
      }
    },
  },
  methods: {
    atackMonster() {
      this.currentRound++;
      const attackValue = getRandomNumber(2, 5);
      this.monsterHealth -= attackValue;
      this.monsterAtack();
    },
    monsterAtack() {
      const attackMonsterValue = getRandomNumber(3, 8);
      this.playerHealth -= attackMonsterValue;
    },
    specialAtack() {
      this.currentRound++;
      const specialAtackValue = getRandomNumber(3, 8);
      this.monsterHealth -= specialAtackValue;
      this.monsterAtack();
    },
    healPlayer() {
      this.currentRound++;
      const healLife = getRandomNumber(2, 5);

      if (this.playerHealth + healLife > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healLife;
      }
      this.monsterAtack();
    },
  },
});
app.mount("#game");
