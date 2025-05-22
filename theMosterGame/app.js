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
      logMessages: [],
    };
  },
  //nice practice
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    isSpecialAttackDisabled() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    atackMonster() {
      this.currentRound++;
      const attackValue = getRandomNumber(2, 5);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.monsterAtack();
    },
    monsterAtack() {
      const attackMonsterValue = getRandomNumber(3, 8);
      this.playerHealth -= attackMonsterValue;
      this.addLogMessage("monster", "attack", attackMonsterValue);
    },
    specialAtack() {
      this.currentRound++;
      const specialAtackValue = getRandomNumber(3, 8);
      this.monsterHealth -= specialAtackValue;
      this.addLogMessage("player", "special attack", specialAtackValue);
      this.monsterAtack();
    },
    healPlayer() {
      this.currentRound++;
      const healLife = getRandomNumber(2, 5);
      this.playerHealth = Math.min(this.playerHealth + healLife, 100);
      this.addLogMessage("player", "heal", healLife);
      this.monsterAtack();
    },
    startNewGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrenderGame() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        hadWhatAction: what,
        valueAction: value,
      });
    },
  },
});
app.mount("#game");
