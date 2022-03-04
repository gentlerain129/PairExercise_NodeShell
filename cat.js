const fs = require("fs");

module.exports = function readfiles(input) {
  console.log(
    fs.readFile(input, "utf8", (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log(data);
        // process.stdout.write("prompt > ");
      }
    })
  );
};
