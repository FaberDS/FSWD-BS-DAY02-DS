var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(name, hp, release, km, img) {
        this.name = name;
        this.hp = hp;
        this.release = release;
        this.km = km;
        this.img = img;
    }
    Vehicles.prototype.tryIt = function () {
        var con = document.getElementById("content");
        var box = document.createElement("div");
        box.className = "element";
        con.appendChild(box);
        var hlMenu = document.createElement("h1");
        hlMenu.className = "hlMenu";
        hlMenu.innerHTML = this.name;
        box.appendChild(hlMenu);
        var imgContainer = document.createElement("div");
        imgContainer.className = "images";
        var image = document.createElement("img");
        image.src = this.img;
        imgContainer.appendChild(image);
        box.appendChild(imgContainer);
        // console.log(this.name);
    };
    return Vehicles;
}());
var Lkw = /** @class */ (function (_super) {
    __extends(Lkw, _super);
    function Lkw(name, hp, release, km, img, maxLoad, achses) {
        var _this = _super.call(this, name, hp, release, km, img) || this;
        _this.name = name;
        _this.hp = hp;
        _this.release = release;
        _this.km = km;
        _this.img = img;
        _this.maxLoad = maxLoad;
        _this.achses = achses;
        return _super.prototype.tryIt.call(_this) + _this.maxLoad + _this.achses;
    }
    return Lkw;
}(Vehicles));
var golf = new Vehicles("VW", 120, 1989, 200000, "https://images.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg?auto=compress&cs=tinysrgb&h=350");
var bmw = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350");
var scania = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350", 1, 4);
bmw.tryIt();
golf.tryIt();
scania.tryIt();
