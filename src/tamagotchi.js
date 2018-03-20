export let tamagotchi = {
  name: '',
  characteristics: {},
  foodLevel: 10,
  funLevel: 10,
  hygieneLevel: 10,
  sleepLevel: 10,
  age: 0,
  isSick: false,
  isDead: false,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel--;
      } else if (this.foodLevel == 0) {
        clearInterval(hungerInterval);
        return "Your pet starved to death.";
      }
    }, 60000);
  },
  feed: function() {
    if (this.foodLevel < 10) {
      this.foodLevel++;
    }
  },
  setFun: function() {
    const funInterval = setInterval(() => {
      if (this.funLevel > 0) {
        this.funLevel--;
      }
      if (this.funLevel === 0) {
        return "Your pet is bored. Play with them before they are driven off the brink of sanity.";
      }
    }, 30000);
  },
  play: function() {
    if (this.funLevel < 10) {
      this.funLevel++;
    }
  },
  setHygiene: function() {
    const hygieneInterval = setInterval(() => {
      if (this.hygieneLevel > 0) {
        this.hygieneLevel--;
      }
      if (this.hygieneLevel == 0) {
        return "Your pet is filthy. Give them a bath before they get sick.";
      }
    }, 45000);
  },
  bathe: function() {
    this.hygieneLevel = 10;
  },
  setSleep: function() {
    const sleepInterval = setInterval(() => {
      if (this.sleepLevel > 0) {
        this.sleepLevel--;
      }
      if (this.sleepLevel == 0) {
        return "Your pet died of sleep deprivation.";
      }
    }, 60000);
  },
  sleep: function() {
    this.sleepLevel = 10;
  },
  setAge: function() {
    const ageInterval = setInterval(() => {
      this.age++;
      if (this.age == 25) {
        this.isDead = true;
        return "Your pet has died of old age. They lived a full and beautiful life."
      }
    }, 60000);
  }

}
