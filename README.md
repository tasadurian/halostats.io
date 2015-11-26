# Halo-Profile-Page
Example of a Halo 5 profile page using Node.js and halo-api.


## To run the application:

Make sure you have [Node.js](https://nodejs.org/en/) installed.

Make sure you have [gulp.js](http://gulpjs.com/) installed.
```
npm install --global gulp
```

Fork the repo and clone from Github.
```
git clone https://github.com/TheTommyTwitch/Halo-Profile-Page.git
```

Install all of the dependencies.
```
npm install
```

Create a config.js file in the root directory, then add your api key. You can get an api key [here](https://developer.haloapi.com/).
```JavaScript
module.exports = {
  apiKey: 'YOUR API KEY'
};
```
PS, if you're going to push back to Github add the config to your .gitignore file.

Start the server with gulp.
```
gulp
```

You should now have the application running on your local machine!
