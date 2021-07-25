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
var Decorators = /** @class */ (function () {
    function Decorators() {
    }
    return Decorators;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.engine = 'oil';
        _this.power = 3500;
        _this.door = 4;
        _this.color = 'white';
        _this.price = 10200;
        _this.setColor = function (color) { return _this.color = color; };
        _this.setEngine = function (engineType) { return _this.engine = engineType; };
        _this.setDoor = function (count) {
            if (count === void 0) { count = 2 || 4; }
            return _this.door = count;
        };
        _this.setPower = function (power) { return _this.power = power; };
        return _this;
    }
    Car.prototype.priceCalculation = function () {
        if (this.door === 4) {
            this.price += 500;
        }
        else
            this.price -= 500;
        if (this.engine === 'oil') {
            this.price += 1000;
        }
        else
            this.price -= 1000;
        if (typeof this.color != 'undefined') {
            this.price += 100;
        }
        return "BMW with color " + this.color + ", with " + this.door + " doors, \n            " + this.power + " power and  " + this.engine + " engine costs " + this.price + "$";
    };
    return Car;
}(Decorators));
var BMW = new Car();
console.log(BMW.priceCalculation());
