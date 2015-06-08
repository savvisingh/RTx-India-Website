

$(function() {


     
	//highlight the current nav

	$("#home a:contains('Home')").parent().addClass('activo');

	

	
	


$('.openBtn').click(function(){

  var str = $(this).attr('id');

  var key_val = str.split('_');


if(key_val[2]=='load'){

  $.ajax({

        type: 'POST',

        url: 'view_load_popup.php',

		data: "id="+key_val[1],

        success: function (result) {

		//alert(result);

			if(result)

			{

			$("#tid").html('Load details');

			$("#pop_data").html(result);

			}

			else{

			$("#pop_data").html("");

			}

        }

    });

	}

if(key_val[2]=='truck'){

  $.ajax({

        type: 'POST',

        url: 'view_truck_popup.php',

		data: "id="+key_val[1],

        success: function (result) {

		//alert(result);

			if(result)

			{

			$("#tid").html('Truck details');

			$("#pop_data").html(result);

			}

			else{

			$("#pop_data").html("");

			}

        }

    });

	}



  });


$('.openmap').click(function(){

 document.getElementById("map_data").innerHTML = "";

  var str = $(this).attr('id');

  var key_val = str.split('_');

  var src = key_val[2].split(',');

  var des = key_val[3].split(',');

  

   $.ajax({

        type: 'POST',

        url: 'view_map_popup.php',

		data: "lgs="+src[0]+"&lts="+src[1]+"&lgd="+des[0]+"&ltd="+des[1],

        success: function (result) {

		//alert(result);

			if(result)

			{

			$("#map_data").html(result);

			}

			else{

			$("#map_data").html("");

			}

        }

    });

});









}); //jQuery is loaded