const express = require("express");
const morgan = require("morgan");
const IP = require("ip");
require("dotenv").config();

// Creating express server
const app = express();

// Log the requests
app.use(morgan("tiny"));

const PORT = process.env.PORT || 3000;
const IP_ADDRESS = IP.address();
const HOST = "localhost";

app.use(require("./routes/characters.routes"));
app.use(require("./routes/comics.routes"));
app.use(require("./routes/creators.routes"));
app.use(require("./routes/events.routes"));
app.use(require("./routes/series.routes"));
app.use(require("./routes/stories.routes"));

app.listen(PORT, () => {
    console.info(
        `Server listening on port ${PORT}\n\t➡️  Host:   http://${HOST}:${PORT}\n\t➡️  Local:  http://${IP_ADDRESS}:${PORT}`
    );
});
