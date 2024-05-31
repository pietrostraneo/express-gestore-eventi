const { json } = require('express');
const events = require('../db/events.json');
const Event = require('../models/event');

const index = (req, res) => {

    const { id } = req.query;

    if (!id) {
        res.format({
            json: () => {
                res.json(Event.getEvents());
            }
        })
    }

    const filteredEvent = Event.getEvents(id);

    if (!filteredEvent) {
        throw new Error('Event not found');
    }

    res.format({
        json: () => {
            console.log(id);
            res.json(filteredEvent);
        }
    })
};

const store = (req, res) => {

    const { id, title, description, date, maxSeats } = req.query;
    const exists = events.find(e => e.id == id);

    if (typeof title !== 'string' || typeof description !== 'string' || typeof date !== 'string') {
        throw new Error('Invalid data type');
    }

    if (title.trim() === '' || description.trim() === '' || date.trim() === '') {
        throw new Error('Invalid data');
    }


    if (exists) {
        throw new Error(`Event with id:${id} already exists`);
    }

    const newEvent = new Event(Number(id), title, description, date, Number(maxSeats));

    if (!newEvent) {
        throw new Error('Error creating new instance of Event');
    }

    Event.writeFile('events', [...events, newEvent.toJSON()])

    res.format({
        json: () => {
            res.json({
                message: 'Event created successfully',
                data: newEvent
            });
        }
    })


};

const update = () => {

};

module.exports = {
    index,
    store,
    update
}