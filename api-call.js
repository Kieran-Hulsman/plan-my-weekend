// metaphor project
// kieran hulsman
// sep 30 2023

// search
const sdk = require('api')('@metaphorapi/v1.0#22sl31gln0t5di1');

sdk.auth('0ff8e847-cf84-4932-ac1b-df666918053b'); // api key
sdk.search({query: 'fun things to do in toronto', numResults: 10})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));