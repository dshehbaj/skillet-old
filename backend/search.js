import handler from './libs/handler';
import fetch from 'node-fetch';

export const main = handler(async (event, context) => {

  const apiKey = process.env.spoonacularAPIKey;
  const reqBody = JSON.parse(event.body);
  const ingredients = reqBody.ingredients.join(',');
  const quantity = reqBody.quantity;

  const url =
    `https://api.spoonacular.com/recipes/findByIngredients`
    + `?apiKey=${apiKey}&ranking=2&ignorePantry=true`
    + `&limitLicense=true&number=${quantity}&ingredients=${ingredients}`;

  const result = await fetch(url);
  let res = await result.json();

  let newArr = res.map((recipeData) => {
    return {
      id: recipeData["id"],
      title: recipeData["title"],
      image: recipeData["image"],
      ingredientAmount:
        recipeData["missedIngredientCount"] + recipeData["usedIngredientCount"],
      ingredients:
        recipeData["usedIngredients"]
        .concat(recipeData["missedIngredients"])
        .map((ingredient) => {
          return {
            id: ingredient["id"],
            unit: ingredient["unit"],
            amount: ingredient["amount"],
            name: ingredient["name"],
            desc: ingredient["original"],
            image: ingredient["image"].replace('312x231', '636x393')
          };
        })
    };
  });

  return newArr;

});
