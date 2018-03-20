import {tamagotchi} from './tamagotchi';
import $ from 'jquery';

export class Interface {
  // static genesis() {
    // var createButton = document.createElement("button");
    // createButton.innerHTML = "Create";
    // document.getElementsByClassName('container')[0].appendChild(createButton);
    // createButton.addEventListener('click', function() {
    //   Interface.play();
    // });
  //
  // }

  static play() {
    $(".creation").hide();
    $(".playing").show();

    tamagotchi.setHunger();
    tamagotchi.setFun();
    tamagotchi.setHygiene();
    tamagotchi.setAge();

    $("button#feed").click(function() {
      tamagotchi.feed();
    });

    $("h2#head").text(`${tamagotchi.name}`)

    var game = setInterval(render, 1000);

    function render() {
      $("#food").text(`Food level: ${tamagotchi.foodLevel}/10`);
      $("#fun").text(`Fun level: ${tamagotchi.funLevel}/10`);
      $("#hygiene").text(`Cleanliness: ${tamagotchi.hygieneLevel}/10`);
      $("#sleep").text(`Energy: ${tamagotchi.hygieneLevel}/10`);
      //age
      if (tamagotchi.age >= 0 && tamagotchi.age < 2) {
        document.getElementById("output").innerHTML = 'egg'; //"<img src='img/egg.png'>";
      } else if (tamagotchi.age >= 2 && tamagotchi.age < 4) {
        document.getElementById("output").innerHTML = 'hatch'; //"<img src='img/hatch.png'>";
      } else if (tamagotchi.age >= 4 && tamagotchi.age < 25) {
        document.getElementById("output").innerHTML = 'happy'; //"<img src='img/happy.png'>";
      } else if (tamagotchi.age == 25) {
        document.getElementById("output").innerHTML = 'dead'; //"<img src='img/dead.png'>";
      }

      //levels
      if (tamagotchi.foodLevel < 3) {
        document.getElementById("output").innerHTML = 'hungry'; //"<img src='img/hungry.png'>";
      }
      if (tamagotchi.funLevel < 3) {
        document.getElementById("output").innerHTML = 'frustrated'; //"<img src='img/frustrated.png'>";
      }

    }
  }
}
