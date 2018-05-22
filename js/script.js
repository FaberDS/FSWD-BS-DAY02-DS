
function Output(category){
 $('#output').html(``);	

 VehicleData.map(function(o){
                  if(o.Category==category)
                  	
                   {var old=$('#output').html();
               		var placePrice = o.Price.toFixed(3).toString().replace(".", ",");
               		// placePrice = placePrice;
                   	$('#output').html(old+`<div class="row space">
			<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 all ${o.Fuel}">
				<a href="#">
					<img src="${o.Image}" alt="car" class="img-responsive center-block" >
					
				</a>
			</div>

			<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
				<table class="table">
				  <tr><td>KM</td><td>${o.Kilometerstand.toFixed(3)}</td></tr>
                 <tr><td>Type</td><td>${o.Type}</td></tr>
                 <tr><td>Modal</td><td>${o.Model}</td></tr>
                 <tr><td>HP</td><td>${o.Power}</td></tr>
                 <tr><td>Fuel</td><td>${o.Fuel}</td></tr>
                 <tr><td>Release</td><td>${o.Releas}</td>
                 <tr><td>Price</td><td>${placePrice}</td>
                 <tr><td>Seats</td><td>${o.Seats}</td>
                </table> 
                <button class="btn-default btn btn-info btn-block" data-toggle="modal" data-target="#${o.ID}">See More</button>
                <hr>
			</div>
		</div>
		<div class="modal fade" id="${o.ID}" role="dialog">
					<div class="modal-dialog">
					
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h3>${o.Type}</h3>
                                    <p class="type">${o.Model}</p>
							</div>
							<div class="modal-body">
								<img class="mediaImg" src="${o.Image}" width="100%" alt="">
								
								<p>${o.Kilometerstand.toFixed(3)} KM</p>
								
							</div>
							<div class="modal-footer">
								
								<p></p>
								<button type="button" class="btn-default btn btn-info btn-block" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
                   `);}	
 });

}