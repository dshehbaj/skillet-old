import handler from './libs/handler';
import fetch from 'node-fetch';

export const main = handler(async (event, context) => {
  const apiKey = process.env.spoonacularAPIKey;
  const id = event.pathParameters.id;
  const url =
    `https://api.spoonacular.com/recipes/${id}/similar?`
    + `apiKey=${apiKey}&number=4`;

  const result = await fetch(url);
  const data = await result.json();

  return data;
});
