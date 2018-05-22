

interface VehicleInter{
	Vcategory: string;
	Vtype: string;
	Vmodel: string;
	Vhp: number;
	Vrelease: number;
	Vkm: number;
	Vimg : string;
	Vprice : number;
	Vdescription: string;
	Vfuel : string;
	Vseats : number;
}
class Vehicles implements VehicleInter{

	constructor(public Vcategory,public Vtype, public Vmodel, public Vhp, public Vrelease, public Vkm, public Vimg, public Vprice, public Vdescription, public Vfuel, public Vseats) {
   }   
    Category(){return this.Vcategory;}
 	Mileage(){return this.Vkm}
 	Display(){
	return { "Category": this.Vcategory,
                 "Type": this.Vseats,
                 "Model": this.Vmodel,
                 "Releas": this.Vrelease,                 
                 "Kilometerstand": this.Vkm,
                 "Power": this.Vhp,
                 "Fuel": this.Vfuel,
                 "Seats": this.Vseats,
                 "Price": this.Vprice,
                 "Image": this.Vimg
               };
	   }    
   
} 








// interface LKWInter{	
// 		LmaxLoad: number;
// }

// class Lkw extends Vehicles implements LKWInter{
// 	constructor(public Vtype, public Vmodel, public Vhp, public Vrelease, public Vkm, public Vimg, public Vprice, public Vdescription, public Vfuel, public Vseats, public LmaxLoad) {
// 		super(Vtype, Vmode, Vhp, Vrelease, Vkm Vimg, Vprice, Vdescription, Vfuel, Vseats);	
		
//    } 
// }



// var golf = new Vehicles("VW", 120, 1989, 200000, "https://images.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg?auto=compress&cs=tinysrgb&h=350");
// var bmw = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350");
// var scania = new Vehicles("X5", 100, 1999, 20000, "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&h=350", 1, 4);

// bmw.tryIt();
// golf.tryIt();
// scania.tryIt();
// var cars = [golf, bmw, scania];
