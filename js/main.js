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
    function Vehicles(Vtype, Vmodel, Vhp, Vrelease, Vkm, Vimg, Vprice, Vdescription, Vfuel, Vseats) {
        this.Vtype = Vtype;
        this.Vmodel = Vmodel;
        this.Vhp = Vhp;
        this.Vrelease = Vrelease;
        this.Vkm = Vkm;
        this.Vimg = Vimg;
        this.Vprice = Vprice;
        this.Vdescription = Vdescription;
        this.Vfuel = Vfuel;
        this.Vseats = Vseats;
    }
    return Vehicles;
}());
var Lkw = /** @class */ (function (_super) {
    __extends(Lkw, _super);
    function Lkw(Vtype, Vmodel, Vhp, Vrelease, Vkm, Vimg, Vprice, Vdescription, Vfuel, Vseats, LmaxLoad) {
        var _this = _super.call(this, Vtype, Vmode, Vhp, Vrelease, Vkm, Vimg, Vprice, Vdescription, Vfuel, Vseats) || this;
        _this.Vtype = Vtype;
        _this.Vmodel = Vmodel;
        _this.Vhp = Vhp;
        _this.Vrelease = Vrelease;
        _this.Vkm = Vkm;
        _this.Vimg = Vimg;
        _this.Vprice = Vprice;
        _this.Vdescription = Vdescription;
        _this.Vfuel = Vfuel;
        _this.Vseats = Vseats;
        _this.LmaxLoad = LmaxLoad;
        return _this;
    }
    return Lkw;
}(Vehicles));
var golf = new Vehicles("VW", 120, 1989, 200000, "https://images.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg?auto=compress&cs=tinysrgb&h=350");
var bmw = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350");
var scania = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350", 1, 4);
bmw.tryIt();
golf.tryIt();
scania.tryIt();
var cars = [golf, bmw, scania];
