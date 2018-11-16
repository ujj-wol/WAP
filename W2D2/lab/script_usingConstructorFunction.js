/*jshint esversion: 6 */

//I dunno what i am doing here :D

(function () {
    "use strict";

    var bicyclePrototype;
    var mountainbikePrototype;

    function createBicyclePrototype() {
        this.speed = 0;
    }
    createBicyclePrototype.prototype.applyBrake = function (reduce) {
        this.speed = this.speed - reduce;
    };

    createBicyclePrototype.prototype.speedUp = function (increment) {
        this.speed += increment;
    }

    function createMountainBikePrototype(bike) {
        var mountainbike = Object.create(bike);
        this.gear = 1;
    }
    createMountainBikePrototype.prototype.setGear = function (newGear) {
        this.gear = newGear;
    };

    var start = function () {
        bicyclePrototype = new createBicyclePrototype();
        mountainbikePrototype = new createMountainBikePrototype(bicyclePrototype);

        var bicycle1 = Object.create(bicyclePrototype);
        var mtbike1 = Object.create(mountainbikePrototype);
        var mtbike2 = Object.create(mountainbikePrototype);


        console.log("speed: " + mtbike1.speed);
        mtbike1.speedUp(3);
        mtbike1.speedUp(5);
        console.log("speed: " + mtbike1.speed);
        console.log("speed: " + bicycle1.speed);
        bicycle1.speedUp(10);
        bicycle1.applyBrake(3);

        mtbike1.setGear(7);
        bicycle1.speed = 2;

        mtbike2.gear = 5;
        mtbike2.speedUp(3);

        console.log("\nbicycle1: ");
        console.log(bicycle1);
        console.log("\nmtbike1: ");
        console.log(mtbike1);
        console.log("\nmtbike2: ");
        console.log(mtbike2);

    };

    start();
})();