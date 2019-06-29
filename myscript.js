// myscript for 03-AJAX01-Canada using AJAX
var solarName;
var background;
var pList = new Array();
var rowID;

class Planet {
	constructor (name, color,radius , image, dfrome,dfroms) {
		this.name = name; this.color = color;
		this.radius = radius; this.image = image;
		this.dfrome=dfrome; this.dfroms=dfroms;
	}
}

// document.ready statement
$(document).ready(function (){
  $.ajax({
	  type:"GET",
	  url:"dataFiles/planets.json",
	  dataType:"json",
	  success:loadJSON,
	  error:function(e) {
		  alert(`${e.status} - ${e.statusText}`);
	  }
  });

  $("#backHead").click(function (){
	$("#background").toggle() });
});




// loadJSON function
function loadJSON(data){
	solarName=data.solarSystem;
	//background=data.country.background;
   for(let planet of data.solarSystem.planets){
	//if(prov.type=="province"){
		//var distances=new Array();

		
	//	}
	
	
		pList.push(new Planet(planet.planetName,planet.planetColor,planet.planetRadiusKM,planet.image,planet.distInMillionsKM.fromSun,planet.distInMillionsKM.fromEarth));
	}

		console.log(pList);
		mainScreen(data);
	

}

// mainScreen function
function mainScreen(data){
	$("#solarName").html(`${solarName} / Planets`);
	$("#background").html(background);
	$("#background").hide();

	$("#planetList").html("");

	for(x =0 ; x<pList.length;x++){
		$("#planetList").append(
				`<li li-id='${x}'>
				<a href='otherPages/planetpage.html'><h2>${pList[x].name}</h2><img src="images/${pList[x].name}-icon.png"></a>
				</li>
				`
		);
	}
}
 

// Save data to local storage
$(document).on("click", "#planetList >li", function() {
	localStorage.setItem("rowID",$(this).closest("li").attr("li-id"));
	localStorage.setItem("solarName",solarName);
	localStorage.setItem("pList",JSON.stringify(pList));
	
});

