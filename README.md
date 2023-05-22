## Ruut
## Live Link: https://ruut-app.netlify.app/
# Development

First install the dependencies

```shell script
   $ npm install
   ```
Then start the React app
```shell script
   $ npm start
   ```
and the project should be accessible on [http://localhost:3000](http://localhost:3000).

or

# Using Docker 
Go root directory and run

```shell script
   $ docker compose up
   ```
   and the project should be accessible on [http://localhost:3000](http://localhost:3000).

# TEST
Every component has it's particular test file. Run:
```shell script
   $ npm test
   ```
and all tests should be running.

# ENVIRONMENT
```shell script
   $ REACT_APP_API_URL
   ```
Unsplash API url to get image data
```shell script
   $ REACT_APP_UNSPLASH_CLIENT_ID
   ```
Client id is used to be authorized in Unsplash API

# DEPENDENCIES
* moment
MomentJS is a JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.
* classnames
A simple JavaScript utility for conditionally joining classNames together.

* @testing-library/react
React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.
* Jest
Jest is a testing framework that allows you to write tests in an approachable, familiar, and feature-rich API


