import handler from './libs/handler';
import fetch from 'node-fetch';

export const main = handler(async (event, context) => {

  const id = event.pathParameters.id;
  const apiKey = process.env.spoonacularAPIKey;

  const url =
    `https://api.spoonacular.com/recipes/${id}/information?`
    + `includeNutrition=true&apiKey=${apiKey}`;

  const result = await fetch(url);
  let res = await result.json();

  let data = {
    id: res.id,
    title: res.title,
    image: res.image,
    time: res.readyInMinutes,
    servings: 2,
    pricePerServing: Math.round(res.pricePerServing),
    source: res.spoonacularSourceUrl,
    nutrients: res.nutrition.nutrients,
    macros: res.nutrition.caloricBreakdown,
    summary: res.summary
  };

  return data;

});
