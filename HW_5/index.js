"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var setDoorCount = /** @class */ (function () {
    function setDoorCount(doorCount) {
        var _this = this;
        this.setDoor = function (count) {
            if (count === void 0) { count = 2 || 4; }
            return _this.doorCount = count;
        };
        this.doorCount = doorCount;
    }
    return setDoorCount;
}());
var setColor = /** @class */ (function (_super) {
    __extends(setColor, _super);
    function setColor(color, doorCount) {
        if (color === void 0) { color = 'white'; }
        var _this = _super.call(this, doorCount) || this;
        _this.setColor = function (color) { return _this.color = color; };
        _this.color = color;
        return _this;
    }
    return setColor;
}(setDoorCount));
var setHybridOrOil = /** @class */ (function (_super) {
    __extends(setHybridOrOil, _super);
    function setHybridOrOil(engine, power, color, doorCount) {
        var _this = _super.call(this, color, doorCount) || this;
        _this.setEngine = function (engineType) { return _this.engine = engineType; };
        _this.setPower = function (power) { return _this.power = power; };
        _this.engine = engine;
        _this.power = power;
        return _this;
    }
    return setHybridOrOil;
}(setColor));
var priceCalculator = /** @class */ (function (_super) {
    __extends(priceCalculator, _super);
    function priceCalculator(engine, power, color, doorCount, price) {
        var _this = _super.call(this, engine, power, color, doorCount) || this;
        _this.price = price;
        return _this;
    }
    priceCalculator.prototype.priceCalculation = function () {
        if (this.doorCount === 4) {
            this.price += 500;
        }
        else
            this.price -= 500;
        if (this.engine === 'oil') {
            this.price += 1000;
        }
        else
            this.price -= 1000;
        if (this.color != 'white') {
            this.price += 100;
        }
        return "BMW with color " + this.color + ", with " + this.doorCount + " doors, " + this.power + " power and  " + this.engine + " engine costs " + this.price + "$";
    };
    return priceCalculator;
}(setHybridOrOil));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(engine, power, color, doorCount, price) {
        return _super.call(this, engine, power, color, doorCount, price) || this;
    }
    return Car;
}(priceCalculator));
var car = new Car('oil', 3000, 'red', 4, 10000);
console.log(car.priceCalculation());
