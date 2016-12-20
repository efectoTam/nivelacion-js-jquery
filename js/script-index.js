$(document).ready( function(){
	$(".js-back").hide();

	function printNews(){
		$(".callout-news").append("<p>NUEVAS RECETAS</p>");
	}printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray){
	console.log('Recipes: ', recipesArray);
	for (i=0; i<recipesArray.length; i++){
		if(recipesArray[i].highlighted==true){
			var lasRecetas = recipesArray[i];
			renderRecipe(lasRecetas);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/

$(document).ready(function(){
	function renderActivities(activitiesArray) {
		/*for(i=0; i<activitiesArray[i]; i++){
			console.log('Activities: ', activitiesArray);
		}*/
	}renderActivities();
});

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


