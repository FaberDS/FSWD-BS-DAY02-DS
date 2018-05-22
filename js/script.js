
function Output(category){
 $('#output').html(``);	
 VehicleData.map(function(o){
                  if(o.Category==category)
                   {var old=$('#output').html();
                   	$('#output').html(old+`<div class="row space">
			<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<a href="#">
					<img src="${o.Image}" alt="car" class="img-responsive center-block">
					
				</a>
			</div>

			<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
				<table class="table">
				  <tr><td>"Mileage"</td><td>${o.Kilomerstand}</td></tr>
                 <tr><td>"Type"</td><td>${o.Type}</td></tr>
                 <tr><td>"Model"</td><td>${o.Model}</td></tr>
                 <tr><td>"Power"</td><td>${o.Power}</td></tr>
                 <tr><td>"Fuel"</td><td>${o.Fuel}</td></tr>
                 <tr><td>"Release"</td><td>${o.Release}</td>
                 <tr><td>Price</td><td>${o.Price}</td>
                 <tr><td>Seats</td><td>${o.Seats}</td>
                </table> 
			</div>
		</div>
                   `);}	
 });

}