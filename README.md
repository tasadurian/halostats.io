# halostats.io
Want a better way to track your stats in Halo? This is a project built for the community with feedback from the community. Have an idea? Feel free to open an issue. We want to make the best halo stats website, and we need the community to tell us what they want!


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
