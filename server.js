//connect web speech
//make terminal not require response command???
//have the terminal speek

const game = require("./public/js/game.js");

const fastify = require("fastify")({
  logger: true,
});
const path = require("path");

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

fastify.get("/game/:message", async function (req, reply) {
  var message = req.params.message;
  var response = await game.main(message);
  finalResponse = response.answer;
  if (finalResponse == undefined) {
    var message = "error";
    var response = await game.main(message);
    finalResponse = response.answer;
  }
  return finalResponse;
});

fastify.get("/intent/:message", async function (req, reply) {
  var message = req.params.message;
  var response = await game.main(message);
  finalResponse = response.intent;
  if (finalResponse == undefined) {
    var message = "error";
    var response = await game.main(message);
    finalResponse = response.answer;
  }
  return finalResponse;
});

fastify.get("/", async function (req, reply) {
  return reply.sendFile("index.html");
});

const start = async () => {
  try {
    console.log(await fastify.listen(3000));
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
