

interface VehicleInter{
	name: string;
	hp: number;
	release: number;
	km: number;
	img : string;
}
class Vehicles implements VehicleInter{

	constructor( public name, public hp, public release, public km, public img) {

   }       
   tryIt(): void {
   		
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
   }
} 

interface LKWInter{
		maxLoad : number;
		achses: number;
}

class Lkw extends Vehicles implements LKWInter{
	constructor( public name, public hp, public release, public km, public img, public maxLoad, public achses) {
		super(name, hp, release, km, img);	
		return super.tryIt() + this.maxLoad+ this.achses;
   } 
}



var golf = new Vehicles("VW", 120, 1989, 200000, "https://images.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg?auto=compress&cs=tinysrgb&h=350");
var bmw = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350");
var scania = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350", 1, 4);

bmw.tryIt();
golf.tryIt();
scania.tryIt();