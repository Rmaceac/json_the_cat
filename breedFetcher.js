const request = require('request');
// userQuery takes in one(1) user input argument
const userQuery = process.argv[2];
// console.log("User Input: ", userQuery);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${userQuery}`;

request(URL, (error, response, body) => {
  const data = JSON.parse(body);
  //if an error occurs, prints basic error information
  if (error) {
    console.log('error:', error);
    console.log('status code:', response && response.statusCode);
  }
  
  // prints an error and exits the code if the breed is not found (no breed found on request returns an empty array).
  if (data.length === 0) {
    console.log("Error: Breed not found");
    return;
  }
  console.log(data[0].description);
});
