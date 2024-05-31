const { json } = require('express');
const events = require('../db/events.json');

const index = (req, res) => {
    const { id } = req.query;

    if (!id) {
        res.format({
            json: () => {
                res.json(events);
            }
        })
    }

    const filteredEvent = events.filter(e => e.id === id);

    res.format({
        json: () => {
            res.json(filteredEvent);
        }
    })
};

const store = () => {

};

const update = () => {

};

module.exports = {
    index,
    store,
    update
}