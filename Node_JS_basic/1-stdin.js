process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  process.stdout.write(`Your name is: ${input}\r`);
});

process.on("exit", () => {
  console.log("This important software is now closing\n");
});

process.stdin.on("end", () => {
  process.exit();
});
