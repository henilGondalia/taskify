import * as openai from "openai";

const configuration = new openai.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openaiClient = new openai.OpenAIApi(configuration);
export default openaiClient;
