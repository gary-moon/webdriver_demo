var expect = require('chai').expect;

// Let's use www.reachedgetest.com and submit a form!

describe("Submit a Form", function() {

  it("should submit a form when the submit button is clicked", function(done) {

    browser
      .url("http://reachedgetest.com/form2.php")

      // We use "[attribute='value']" to get the element with a certain attribute..
      .setValue("[name='mouse']", "foo")
      .setValue("[name='cards']", "bar")
      .setValue("[name='wire']", "baz")
      .click("[name='submit_button']")

      // We need to wait for the next page to load.
      .waitUntil(function() {

        return browser
          .url() // If you don't pass url() anything, then it will get the browser's current URL.
          .then(function(result) {

            // You can print things out to the terminal using console.log.
            console.log(result);

            if (result.value === "http://reachedgetest.com/form3.php") {
              return true;
            } else {
              return false;
            }

          });

      })
      .call(done);

  });

});
