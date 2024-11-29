
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    .then(response => response.json())
    .then(data => {
      
        const chickens = data.meals; 
          const chickensContainer = document.getElementById('chickens');
            chickens.forEach(chicken => {
                const chickenElement = document.createElement('ul');
                chickenElement.classList.add('chicken');
                chickenElement.innerHTML = `
                    <img src="${chicken.strMealThumb}" alt="${chicken.strMeal}">

                    <h3>${chicken.strMeal}</h3>

                    <p>${chicken.strInstructions.slice(0, 150)}...</p>
                    <ul>${getIngredients(chicken).map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                    <button id="youtubelink"><a href="${chicken.strYoutube}">Watch Video</a></button>
                    `;
                      chickensContainer.appendChild(chickenElement);
                    });
                });

                
function getIngredients(recipe) {
  const ingredients = [];
  for (let i = 1; i <= 5; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
          ingredients.push(`${measure} ${ingredient}`);
      }
  }
  return ingredients;
}