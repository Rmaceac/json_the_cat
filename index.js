const { fetchBreedDescription } = require('./breedFetcher');
// userQuery takes in one(1) user input argument
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

