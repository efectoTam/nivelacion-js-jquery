$(document).ready( function(){
	$(".js-menu").hide();
	console.log("El documento está listo");
	$(".js-show-recipe").click(function() {
  		alert("Recipe!");
  		$(".page").removeClass("make");
  		$(".js-show-recipe").addClass("active");
  		$(".js-show-make").removeClass("active");


	});
	$(".js-show-make").click(function() {
  		alert("Make it!");
  		$(".make").toggle();
  		$(".page").addClass("make");
  		$(".js-show-make").addClass("active");
  		$(".js-show-recipe").removeClass("active");
	});
});

$(".js-back").click(function(){
	window.location.href = "index.html";
});