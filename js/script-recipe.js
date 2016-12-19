$(document).ready( function(){
	$(".js-menu").hide();
	console.log("El documento está listo");
	$(".js-show-recipe").click(function() {
  		alert("Recipe!");
  		$(".page").removeClass("make");
	});
	$(".js-show-make").click(function() {
  		alert("Make it!");
  		$(".make").toggle();
  		$(".page").addClass("make");
	});
});