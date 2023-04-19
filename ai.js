// In ai.js
require('dotenv').config();

const key = (process.env.KEY);
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);
async function ask(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 512,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const answer = response.data.choices[0].text;
  return(answer);
}

// Export the "ask" function
module.exports = {
  ask,
};