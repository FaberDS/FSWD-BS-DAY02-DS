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
// interface LKWInter{
// 		maxLoad : number;
// 		achses: number;
// }
// class Lkw extends Vehicles implements LKWInter{
// 	constructor( public name, public hp, public release, public km, public img, public maxLoad, public achses) {
// 		super(name, hp, release, km, img);	
// 		super.tryIt() var detail = document.createElement("p")
//         detail.className = "detail"
//         detail.innerHTML = this.achses
//         box.appendChild(detail);
//    } 
// }
var golf = new Vehicles("VW", 120, 1989, 200000, "https://images.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg?auto=compress&cs=tinysrgb&h=350");
var bmw = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350");
var scania = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350", 1, 4);
bmw.tryIt();
golf.tryIt();
scania.tryIt();
var cars = [golf, bmw, scania];
