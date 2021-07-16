import handler from './libs/handler';
import fetch from 'node-fetch';

export const main = handler(async (event, context) => {
  const id = event.pathParameters.id;
  const apiKey = process.env.spoonacularAPIKey;

  const url =
    `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?`
    + `apiKey=${apiKey}`;

  const result = await fetch(url);
  const data = await result.json();
  let instructions = data[0];

  let equipment = instructions.steps.map((step) => {
    return step.equipment;
  });
  equipment = [].concat.apply([], equipment);
  equipment = equipment.map((equip) => {
    return equip.name;
  });

  let steps = instructions.steps.map((step) => {
    return step.step;
  });

  return {
    equipment,
    steps
  };

});
