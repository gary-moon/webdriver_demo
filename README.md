# WebdriverIO Demo

This is a small demo to show how you can run tests using Webdriver IO.

Note that most of the initial setup has been done for you, so you can get straight to writing tests!

## Getting Started

1. Install [git](https://git-scm.com/documentation): `$ brew install git`
2. Install [node.js](https://nodejs.org/en/docs/): `$ brew install node`
3. Clone this repository: `$ git clone git@github.com:reachlocal/webdriverio_demo.git`
  - You may need to include an SSH key to your github account. Read [here](https://help.github.com/articles/generating-ssh-keys/) to learn how.
4. Install the dependencies listed in [package.json](./package.json): `$ npm install`
5. Run your test: `$ npm test`

## Writing Tests

Check out `tests/simpleTest.js` to get a basic idea of how to write a test.

Add any tests to the `tests/` directory, and they will be automatically run with the command `$ npm test`.

## CSS Testing

Check out [WebdriverCSS](https://github.com/webdriverio/webdrivercss) for automated visual testing. To enable, go to `wdio.conf.js` and check the plugins section.

**NOTE**: As of Nov 10, 2015, WebdriverCSS is not supported for WebdriverIO v3.0 (and this demo uses v3.15). However, support should be coming soon! 

## Resources

Google is your biggest friend when searching for help!

Here are a few other useful links:

- [browser commands](http://webdriver.io/api.html)
- [Javascript Tutorial](http://www.w3schools.com/js/)
- [Node.js guide](http://blog.modulus.io/absolute-beginners-guide-to-nodejs)
- [Mocha](http://chaijs.com/api/bdd/)
- [CSS selectors](http://www.w3schools.com/cssref/css_selectors.asp)
