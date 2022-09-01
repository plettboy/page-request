const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  console.log("error: ", error);
  console.log(response && response.statusCode);

  fs.writeFile(
    "Users/Ryan?lighthouse/example.txt",
    content,
    { flag: "a+" },
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
    }
  );
});

// request()
