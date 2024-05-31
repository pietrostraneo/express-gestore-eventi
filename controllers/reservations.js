const Event = require('../models/event.js');
const Reservation = require('../models/reservation.js');

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

    const exists = reservations.find(r => r.firstName === firstName && r.lastName === lastName);

    if (exists) {
        res.status(400).json({ message: 'Reservation already exists' });
    }

    const maxId = reservations.reduce((max, reservation) => {
        return reservation.id > max ? reservation.id : max;
    }, 0);

    let id = maxId + 1;

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

};


module.exports = {
    index,
    store,
    destroy
}