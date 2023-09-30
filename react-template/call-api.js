const openAI = require("openai");
const sdk = require('api')('@metaphorapi/v1.0#22sl31gln0t5di1');

const METAPHOR_KEY = process.env.METAPHOR_KEY;
const OPENAI_KEY = process.env.OPENAI_KEY;

sdk.auth(METAPHOR_KEY); // api key

const openai = new openAI({
    apiKey: OPENAI_KEY,
});

async function callAPI(city) {
  try {
    const { data } = await sdk.search({
      query: `what is happening in ${city} this weekend`,
      numResults: 1,
    });
    
    const website_id = data.results[0].id;

    const { data: contentData } = await sdk.getContents({ ids: website_id });

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `based on this data plan me a weekend itinerary ${contentData.contents[0].extract}`,
        },
      ],
    });
    console.log(response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (error) {
    return error;
  }
}

module.exports = {
    callAPI
};