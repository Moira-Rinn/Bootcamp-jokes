//Remember how the routes and the controller info used to be together?
//We need to import it and still in clude it in our get call below!
//Now, it's much simpler, because we exporting an object of key-value pairs from our controller.
//Rather than writing the ENTIRE function, we simply access it using JokeController.findAllJokes

const JokeController = require("../controllers/joke.controller");


//we are exporting an arrow function with a parameter of app that contains five statements.
// We import in server.js like this: require("./routes/hero.routes")(app);


module.exports = (app) => {
  app.get("/api/jokes", JokeController.findAllJokes);
  //if data is being sent to my server to create something new, we use a POST request
  app.post("/api/jokes", JokeController.createNewJoke);

  //Make sure this goes second (with the params) because it will search this one by default.
  app.get("/api/jokes/:id", JokeController.findOneJoke);

  app.put('/api/jokes/:id', JokeController.updateJoke);

  app.delete('/api/jokes/:id', JokeController.deleteJoke);

}