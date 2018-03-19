export let tamagotchi = {
  foodLevel: 10,
  funLevel: 10,
  hygieneLevel: 10,
  age: 0,

  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.foodLevel == 0) {
        clearInterval(hungerInterval);
        return "Your pet starved to death.";
      }
    }, 60000);
  },

  feed: function() {
    while (this.foodLevel < 10) {
      this.foodLevel++;
    }
  }

}

//
setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  }

// export class Age {
//   constructor(dob) {
//     this.dob = new Date(dob); //dob expected in yyyy-mm-dd from html form, note this returns
//   }
//
//   ageYears() {
//     let now = new Date(Date.now());
//     return (now.getFullYear() - this.dob.getFullYear());
//   }
//
//   ageToSec() {
//     return (Date.now() - Date.parse(this.dob))/1000;
//   }
//
//   dateDifference(date1, date2) {
//     date1 = new Date(date1);
//     date2 = new Date(date2);
//     return (date2 - date1)/1000; //returns difference in seconds
//   }
//
//   agePlanet(planet) {
//     let conversion = 1;
//     if (planet === 'mercury') {
//       conversion = this.MERCYEARS;
//     } else if (planet === 'venus') {
//       conversion = this.VENUSYEARS;
//     } else if (planet === 'mars') {
//       conversion = this.MARSYEARS;
//     } else if (planet === 'jupiter') {
//       conversion = this.JUPITERYEARS;
//     }
//     let converted = (this.ageToSec()/this.SECONDSINYEAR)/conversion;
//     return converted.toFixed(3);
//   }
//
//   lifeExpectancy(sex, country, planet) {
//     let average = 70;
//     country = country.toLowerCase();
//     if (country === 'japan' || country === 'switzerland' || country === 'singapore' || country === 'australia' || country === 'spain') {
//       average += 5;
//     } else if (country === 'sierra leone' || country === 'angola' || country === 'nigeria' || country === 'somalia' || country === 'cameroon') {
//       average -= 20;
//     }
//
//     if (sex === 'female') {
//       average += 5;
//     }
//
//     if (this.ageToSec() > 0) {
//       average += 5;
//     } else {
//       average -= 5;
//     }
//
//     if (planet === 'mercury') {
//       average = average/this.MERCYEARS;
//     } else if (planet === 'venus') {
//       average = average/this.VENUSYEARS;
//     } else if (planet === 'mars') {
//       average = average/this.MARSYEARS;
//     } else if (planet === 'jupiter') {
//       average = average/this.JUPITERYEARS;
//     }
//     return average;
//   }
//
//   lifeRemaining(expectancy) {
//     return Math.round(expectancy - this.ageToSec()/this.SECONDSINYEAR);
//   }
//
//
// }
