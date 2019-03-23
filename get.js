const fetch = require("isomorphic-fetch");
const request = require("request");

fetch("http://localhost:3000/necklaces")
  .then(response => response.json())
  .then(data => {
    request.get(
      {
        url: "http://localhost:3000/necklaces",
        json: true,
        body: { name: "Blue Necklace" }
      },
      (err, response, body) => {
        if (response.statusCode === 200) {
          console.log("idone");
          console.log(body);
        } else {
          console.log("edone");
          console.log(body);
        }
      }
    );
    // var ReturnedData = jQuery.parseJSON(response);
    // var Col1 = ReturnedData.COLUMNS[0];  // will provide you first COLUMN value i.e. "PLAN"
    // var Data1= ReturnedData.DATA[0];  // will provide you first DATA value
  });
