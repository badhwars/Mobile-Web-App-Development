// myscript for 03-AJAX-01-Canada using AJAX for individual pagevar countryName;
var pList = new Array();
var rowID;
var cList = new Array();
var planetName;
$(document).ready(function() {
	// get local storage values
	 planetName=localStorage.getItem("solarName");
	 rowID=localStorage.getItem("rowID");
	 pList=JSON.parse(localStorage.getItem("pList"));
	 $("#solar").html(planetName);

	 $("#pname").html(pList[rowID].name);
    $("#pradius").html(pList[rowID].radius);
    $("#pcolor").html(pList[rowID].color);
    $("#dfrome").html(pList[rowID].dfrome + " Million Kms");
    $("#dfroms").html(pList[rowID].dfroms + " Million Kms");
	// $("#bg").html(`<img src='../images/${pList[rowID].flag}'>`);
   // $("#cities").html("Major cities : <br />");

   $("#bg").css("background-image", "url(../images/"+ pList[rowID].name+".jpg  )");
	
	// fill in output fields
//for(x=0;x<pList[rowID].cities[0].length;x++){
	//$("#cities").append(`-${pList[rowID].cities[0][x]}<br />`);
//}

});

