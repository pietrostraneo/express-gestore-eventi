const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events.js');
const resCtrl = require('../controllers/reservations.js');

router.get('/', eventsCtrl.index);
router.post('/', eventsCtrl.store);
router.put('/:eventId', eventsCtrl.update);

router.get('/:eventId/reservations', resCtrl.index);
router.post('/:eventId/reservations', resCtrl.store);
router.delete('/:eventId/reservations/:reservationId', resCtrl.destroy);

module.exports = router;