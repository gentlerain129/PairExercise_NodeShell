const callpwd = require("./pwd");
const callls = require("./ls");
const callcat = require("./cat");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    process.stdout.write(callpwd());
  } else if (cmd === "ls") {
    process.stdout.write(callls());
  } else if (cmd.includes(" ")) {
    const name = cmd.split(" ");
    // name[0] = cat;
    // name[1] = filename;

    callcat(name[1]);
  }

  process.stdout.write("\nprompt > ");
});
