const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/joke.routes")(app);

const PORT = 8000;

app.listen(8000, () => console.log(`Server connected on port ${PORT}`))