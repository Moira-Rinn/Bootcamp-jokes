// BACK-END ALL IN ONE FILE
const express = require("express");
const app = express();

//BOTH ARE NEEDED FOR POST AND PUT CALLS (i.e. where we SENS info in the request)
//This parses incoming requests with JSON payloads. Allows us to recongnize Request Object as a JSON Object.
//Without, we would get TypeErrors on our "post" calls https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

//This parses incoming requests with STRING OR ARRAYS payloads. Allows us to recongnize Request Object as a strings or arrays.
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/joke.routes")(app);
// Longhand:
// const jokeRoutes = require("./routes/joke.route");
// jokeRoutes(app);


const portNumber = 8000;

app.listen(8000, () => console.log(`Server connected on port ${portNumber}`))