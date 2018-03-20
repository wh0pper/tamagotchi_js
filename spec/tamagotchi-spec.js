import {tamagotchi} from './../src/tamagotchi';

describe('tamagotchi', function() {

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('has property containing foodLevel of 0-10', function() {
    expect(tamagotchi.foodLevel).toEqual(10);
  });

  it('foodLevel decreases by 1 every 60 seconds', function() {
    tamagotchi.setHunger();
    jasmine.clock().tick(60001);
    expect(tamagotchi.foodLevel).toEqual(9);
  });

  it('feeding increases foodLevel by 1 until full', function() {
    tamagotchi.setHunger();
    jasmine.clock().tick(60001);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toEqual(10);
    tamagotchi.feed();
    expect(tamagotchi.foodLevel).toEqual(10);
  });

  it('funLevel decreases by 1 every 30 seconds, playing increases by 1', function() {
    tamagotchi.setFun();
    jasmine.clock().tick(30001);
    expect(tamagotchi.funLevel).toEqual(9);
    tamagotchi.play();
    expect(tamagotchi.funLevel).toEqual(10);
  });

  it('hygieneLevel decreases by 1 every 45 seconds, bathing sets back at 10', function() {
    tamagotchi.setHygiene();
    jasmine.clock().tick(135001);
    expect(tamagotchi.hygieneLevel).toEqual(7);
    tamagotchi.bathe();
    expect(tamagotchi.hygieneLevel).toEqual(10);
  });

  it('ages by 1 every 60s and dies at 25', function() {
    tamagotchi.setAge();
    jasmine.clock().tick(1440001);
    expect(tamagotchi.age).toEqual(24);
    jasmine.clock().tick(1500001);
    expect(tamagotchi.isDead).toEqual(true);
  });

});
