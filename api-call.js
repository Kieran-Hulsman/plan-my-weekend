// metaphor project
// kieran hulsman
// sep 30 2023

const sdk = require('api')('@metaphorapi/v1.0#22sl31gln0t5di1');
sdk.auth('0ff8e847-cf84-4932-ac1b-df666918053b'); // api key

const city = 'toronto'

sdk.search({query: `what is happening in ${city} this weekend` , numResults: 1})
  .then(({ data }) => {
    const website_id = data.results[0].id;
    
    sdk.getContents({ids: website_id})
        .then(({ data }) => {
            console.log(data.contents[0].extract);
        })
        .catch(err => console.error(err));

  })
  .catch(err => console.error(err))
