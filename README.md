# Twitter API Challenge
[![Build Status](https://travis-ci.org/vitortalaia/twitter_api_challenge.svg?branch=master)](https://travis-ci.org/vitortalaia/twitter_api_challenge)
[![Code Climate](https://codeclimate.com/repos/5681271a8109dc3dca003db5/badges/b3bfc9b0af56fdaed1dc/gpa.svg)](https://codeclimate.com/repos/5681271a8109dc3dca003db5/feed)
[![Test Coverage](https://codeclimate.com/repos/5681271a8109dc3dca003db5/badges/b3bfc9b0af56fdaed1dc/coverage.svg)](https://codeclimate.com/repos/5681271a8109dc3dca003db5/coverage)

### [Heroku app](http://vitortalaia-twitter-api.herokuapp.com/)

### Local setup

To be able to run this project locally (assuming you have the prerequisites for running a Ruby on Rails application on your system), you should create a `.env` file as copy of `.env.example` and setup the data from Twitter API.

Once you have done this:

```console
# Install the project dependencies
bundle install

# Setup the database
rake db:setup

# Add a user to the database
rake db:seed

# Startup the local server
rails s
```

You can now log on with the credentials below:

```
email: user@example.com
password: password
```

### Running the test suite

To run the tests, simply use the command `rspec`.
