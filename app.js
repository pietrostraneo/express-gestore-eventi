const express = require('express');
const app = express();
const port = 3000;

const eventsRouter = require('./routers/events.js')

app.use('/events', eventsRouter);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})