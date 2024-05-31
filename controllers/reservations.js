const Event = require('../models/event.js');
const Reservation = require('../models/reservation.js');
// const utils = require('../utils.js');
const path = require('path');
const fs = require('fs');

const index = (req, res) => {
    const { eventId } = req.params;
    const reservations = Event.getReserverdEvents(eventId);

    if (!reservations) {
        res.status(404).json({ message: 'No reservations found' });
    }

    res.format({
        json: () => {
            res.json(reservations);
        }
    })
};

const store = (req, res) => {
    const { eventId } = req.params;
    const { firstName, lastName, email } = req.query;


    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
        res.status(400).json({ message: 'Please provide a first name, last name and an email' });
    }

    if (email) {
        let char = email.split('');
        let validate = char.find(c => c === '@');
        if (!validate) {
            res.status(400).json({ message: 'Please provide a valid email' });
        }
    }

    const reservations = Event.readFile('reservations');
    const events = Event.readFile('events');

    const exists = reservations.find(r => r.firstName === firstName && r.lastName === lastName);

    if (exists) {
        res.status(400).json({ message: 'Reservation already exists' });
    }



    const maxId = reservations.reduce((max, reservation) => {
        return reservation.id > max ? reservation.id : max;
    }, 0);

    let id = maxId + 1;

    // utils.checkDate(eventId);

    const reserve = new Reservation(Number(id), firstName, lastName, email, Number(eventId));

    if (!reserve) {
        res.status(400).json({ message: 'Invalid reservation' });
    }

    Event.writeFile('reservations', [...reservations, reserve.toJSON()])

    res.format({
        json: () => {
            res.json({
                message: `Event reserved for ${reserve.firstName} ${reserve.lastName}`
            });
        }
    })


};

const destroy = (req, res) => {

    let reservations = Event.readFile('reservations');

    const updateReservations = (newReservation) => {
        const filePath = path.join(__dirname, '../db/reservations.json');
        fs.writeFileSync(filePath, JSON.stringify(newReservation));
        reservations = newReservation;
    };

    const { eventId, reservationId } = req.params;
    const reservationToDelete = reservations.find(r => r.id === Number(reservationId));
    if (!reservationToDelete) {
        res.format({
            json: () => {
                res.status(404).json({
                    status: 404,
                    error: 'Reservation not found'
                })
            },
            html: () => {
                res.status(404).send('Post not found');
            }
        })
    }

    if (Number(eventId) === reservationToDelete.eventId && Number(reservationId) === reservationToDelete.id) {
        const newReservations = reservations.filter(r => r.id !== Number(reservationId));
        updateReservations(newReservations);

        res.format({
            json: () => {
                res.status(200).json({
                    status: 200,
                    message: 'Reservation deleted successfully'
                })
            }

        })
    }
};


module.exports = {
    index,
    store,
    destroy
}