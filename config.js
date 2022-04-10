requirejs.config({
  baseUrl: ".",
  paths: {
    "jquery": "lib/jquery.min",
    "airtable": "lib/airtable.browser",
    "src/main": "index.min"
  }
});

require(["src/main"]);
