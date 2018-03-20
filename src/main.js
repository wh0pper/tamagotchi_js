import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {tamagotchi} from './tamagotchi';
import { Interface } from './interface';

$(document).ready(function() {
  $('form#creation_form').submit(function(event) {
    event.preventDefault();
    let name = $('input#name').val();
    tamagotchi.name = name;
    Interface.play();

  });
});

// $('.playing').append(``)

// let promise = new Promise(function(resolve, reject) {
//
// })
//
