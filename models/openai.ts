const openai = require('openai');

openai.apiKey = process.env.OPENAI_API_KEY;

function queryOpenAI(searchTerm) {
  openai.Completion.create({
    engine: 'davinci-codex',
    prompt: searchTerm,
    max_tokens: 60
  }).then(response => {
    console.log(response.choices[0].text.trim());
  }).catch(error => {
    console.error(error);
  });
}   