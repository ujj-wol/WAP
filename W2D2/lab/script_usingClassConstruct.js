/*jshint esversion: 6 */

//I dunno what i am doing here :D

(function () {
    "use strict";

    var bicyclePrototype;
    var mountainbikePrototype;

    class createBicyclePrototype {
        constructor(speed) {
            this._speed = speed;
        }

        applyBrake(reduce) {
            this._speed -= reduce;
        }

        speedUp(increment) {
            this._speed += increment;
        }
    }

    class createMountainBikePrototype extends createBicyclePrototype {
        this._gear = 1;
        setGear(gear) {
            this._gear = gear;
        }


    }

    var createMountainBikePrototype = function (bike) {
        var mountainbike = Object.create(bike);
        mountainbike.gear = 1;
        mountainbike.setGear = function (newGear) {
            this.gear = newGear;
        };
        return mountainbike;
    };

    var start = function () {
        bicyclePrototype = createBicyclePrototype();
        mountainbikePrototype = createMountainBikePrototype(bicyclePrototype);

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