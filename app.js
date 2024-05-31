const express = require('express');
const app = express();
const port = 3000;

const eventsRouter = require('./routers/events.js');
const notFound = require('./middlewares/notFound.js');
const errorHandling = require('./middlewares/errorHandling.js');

app.use('/events', eventsRouter);

app.use(notFound);
app.use(errorHandling);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})