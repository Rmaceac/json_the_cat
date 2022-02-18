const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    //if an error occurs, prints basic error information
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    // prints an error and exits the code if the breed is not found (no breed found on request returns an empty array).
    if (data.length === 0) {
      callback("Breed not found");
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };