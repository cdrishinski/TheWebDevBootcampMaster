const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

request('http://www.redditdfdf.com', (err, res, body) =>{
    if(err){
        console.log('something went wrong!')
        console.log(err)
    } else {
        if(res.statusCode == 200){
            //everything worked
            console.log(body)
        }
    }
})