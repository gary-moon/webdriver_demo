var expect = require('chai').expect;

describe("Simple Test", function() {

  // We can put describe() within other describe().
  describe("Google", function() {

    // An it() is considered one test.
    // Don't forget the done in function(done)!
    it("has a title", function(done) {

      // browser is defined by Webdriver IO in the global space, meaning it is available anywhere within the test.
      browser
        .url("https://www.google.com")
        .getTitle()
        .then(function(title) {

          // The getTitle() command gets the title and passes it on to the next command.
          // In this case, text is whatever the getTitle() command found.

          // Here, we use Mocha's expect().
          expect(title).to.equal("Google");

        })
        .call(done); // Make sure to call done when we finish the test!
    });

    // Let's try a test that will fail...
    it("has an element with ID foo", function(done) {

      // Note the use of #What_is_WebdriverIO?.
      // This is a CSS selector.
      // For more information, check here: http://www.w3schools.com/cssref/css_selectors.asp
      browser
        .url("http://webdriver.io/")
        .getText("#What_is_WebdriverIO?")
        .then(function(text) {

          // Much like getTitle(), getText() gets whatever text is in the element and passes it to the next command.

          // The text for this element should be "What is WebdriverIO?", but instead we expect it to be "foobar".
          // Thus, this test should show a failure when you run it.

          // Check the HTML of the site by going to the website and opening the Developer Tools (Option + Command + I).
          expect(text).to.equal("foobar");

        })
        .call(done);

    });

  });

});
