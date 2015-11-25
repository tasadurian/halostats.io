# Halo-Profile-Page
Example of a Halo 5 profile page using Node.js and halo-api.


## To run the application:

Make sure you have [Node.js](https://nodejs.org/en/) installed.

Make sure you have [gulp.js](http://gulpjs.com/) installed.

Fork the repo and clone from Github.
```
git clone https://github.com/TheTommyTwitch/Halo-Profile-Page.git
```

Install all of the dependencies.
```
npm install
```

Create a config file in the root directory, and add your api key.
```JavaScript
module.exports = config;

var config = {
  apiKey: 'b554b57e08b04fa0b6cbfc628377bfdf'
};
```
PS, if you're going to push back to Github add the config to your .gitignore file.

Start the server with gulp.
```
gulp
```

You should now have the application running on your local machine!
