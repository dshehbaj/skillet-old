import handler from './libs/handler';

export const main = handler(async (event, context) => {
  const apiKey = process.env.spoonacularAPIKey;

  return JSON.stringify(apiKey);
});
