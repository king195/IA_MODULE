$(document).ready(function() {
	var unidad1 = new Array; var conthor = 0;
	var unidad2 = new Array; var contver = 0;

	var totver = 40; 
	var tothor = 60;

	var distver = 0;
	var disthor = 0;

	for(var i = 0; i < totver; i++){
		$(".container").append("<tr>");
		for(var j = 0; j < tothor; j++)
			$(".container").append("<td id='"+i+"_"+j+"' class='engine block'> </td>");
		
		$(".container").append("</tr>");
	}

		//ini var
		unidad1[0] = Math.floor(Math.random() * totver);//y 20
		unidad1[1] = Math.floor(Math.random() * tothor); //x 5

		unidad2[0] = Math.floor(Math.random() * totver);//y 12
		unidad2[1] = Math.floor(Math.random() * tothor); //x 17
						//y+8
						//x-12

		$("#"+(unidad1[0])+"_"+(unidad1[1])).css('background-color','green');
		$("#"+(unidad2[0])+"_"+(unidad2[1])).css('background-color','red');


		distver = unidad1[0] - unidad2[0];
		disthor = unidad1[1] - unidad2[1];

		contver = unidad1[0];
		conthor = unidad1[1];


		while(contver != unidad2[0] || conthor != unidad2[1]){
			if(conthor != unidad2[1]){
				if(conthor > unidad2[1] && conthor != unidad2[1])
					conthor = conthor - 1;
				else
					conthor = conthor + 1;
			}

			if(contver != unidad2[0]){
				if(contver > unidad2[0] && contver != unidad2[0])
					contver = contver - 1;
				else
					contver = contver + 1;
			}

			$("#"+(contver)+"_"+(conthor)).css('background-color','yellow');
		}

		$("#"+(unidad2[0])+"_"+(unidad2[1])).css('background-color','red');

});