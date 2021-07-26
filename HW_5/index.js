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
var Car = /** @class */ (function () {
    function Car() {
        var _this = this;
        this.getDescription = function () {
            if (typeof _this.color !== undefined || typeof _this.door !== undefined)
                _this.price += 2000;
            if (_this.engine == 'oil')
                _this.price += 3000;
            else if (_this.engine == 'hybrid')
                _this.price += 1000;
            return "Engine:" + _this.engine + ", Power:" + _this.power + ", Color:" + _this.color + ",\n          " + _this.door + " doors costs " + _this.price;
        };
    }
    return Car;
}());
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.engine = "oil";
        _this.power = 360;
        _this.door = 4;
        _this.color = 'red';
        _this.price = 10000;
        return _this;
    }
    return BMW;
}(Car));
var setDoorAndColor = /** @class */ (function (_super) {
    __extends(setDoorAndColor, _super);
    function setDoorAndColor(car, door, color) {
        var _this = _super.call(this) || this;
        _this.description = function () {
            "" + _this.decoratedCar.getDescription();
        };
        _this.decoratedCar = car;
        _this.door = door;
        _this.color = color;
        return _this;
    }
    return setDoorAndColor;
}(BMW));
var setEngine = /** @class */ (function (_super) {
    __extends(setEngine, _super);
    function setEngine(car, engine) {
        var _this = _super.call(this) || this;
        _this.description = function () {
            "" + _this.decoratedCar.getDescription();
        };
        _this.decoratedCar = car;
        _this.engine = engine;
        return _this;
    }
    return setEngine;
}(BMW));
var bmw = new BMW();
console.log(bmw.getDescription());
bmw = new setDoorAndColor(bmw, 2, 'blue');
console.log(bmw.getDescription());
bmw = new setEngine(bmw, 'hybrid');
console.log(bmw.getDescription());
