// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import {tamagotchi} from './tamagotchi';

$(document).ready(function() {
  $("#food").text(`Food level: ${tamagotchi.foodLevel}/10`);
  $("#fun").text(`Fun level: ${tamagotchi.funLevel}/10`);
  $("#hygiene").text(`Cleanliness: ${tamagotchi.hygieneLevel}/10`);
})

tamagotchi.setHunger();
tamagotchi.setFun();
tamagotchi.setHygiene();
tamagotchi.setAge();

var game = setInterval(playing, 1000);

function playing() {
  console.log(tamagotchi.age);
  if (tamagotchi.age >= 0 && tamagotchi.age < 2) {
    document.getElementById("output").innerHTML = "<img src='img/egg.png'>";
  }

  if (tamagotchi.age >= 2 && tamagotchi.age < 4) {
    document.getElementById("output").innerHTML = "<img src='img/hatch.png'>";
  }

  if (tamagotchi.age >= 4 && tamagotchi.age < 25) {
    document.getElementById("output").innerHTML = "<img src='img/happy.png'>";
  }

  if (tamagotchi.age == 25) {
    document.getElementById("output").innerHTML = "<img src='img/dead.png'>";
  }

  if (tamagotchi.foodLevel < 3) {
    document.getElementById("output").innerHTML = "<img src='img/hungry.png'>";
  }

  if (tamagotchi.funLevel < 3) {
    document.getElementById("output").innerHTML = "<img src='img/frustrated.png'>";
  }


}
