// metaphor project
// kieran hulsman
// sep 30 2023
const openAI = require("openai");

const sdk = require('api')('@metaphorapi/v1.0#22sl31gln0t5di1');
sdk.auth('0ff8e847-cf84-4932-ac1b-df666918053b'); // api key

const openai = new openAI({
    apiKey: "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",
});

const CITY = 'toronto';

sdk.search({query: `what is happening in ${CITY} this weekend` , numResults: 1})
.then(({ data }) => {
    const website_id = data.results[0].id;
    
    sdk.getContents({ids: website_id})
        .then(({ data }) => {

            openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{"role": "user", "content": `based on this data plan me a weekend itinerary ${data.contents[0].extract}`}]
            })
            .then(response => console.log(response.choices[0].message.content));

        })
        .catch(err => console.error(err));

})
.catch(err => console.error(err))