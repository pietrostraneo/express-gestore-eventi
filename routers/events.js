const express = require('express');
const router = express.Router();
const eventsCtrl = require('../controllers/events.js');

router.get('/', eventsCtrl.index);
router.post('/', eventsCtrl.store);
router.put('/:event', eventsCtrl.update);

module.exports = router;