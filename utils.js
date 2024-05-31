const Event = require('./models/event.js');

function checkDate(eventID) {
    const events = Event.readFile('events');

    let eventToCheck = events.find(e => e.id === Number(eventID))

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let eventFull = new Date(eventToCheck.date);
    let eventYear = eventFull.getFullYear();
    let eventMonth = eventFull.getMonth();
    let eventDay = eventFull.getDate();

    if (currentYear > eventYear) {
        throw new Error(`This event took place in the year ${eventYear}`);
    }

    if (currentYear >= eventYear && currentMonth > eventMonth) {
        throw new Error(`This event took place in ${eventToCheck.date}`);
    }

    if (currentYear >= eventYear && currentMonth >= eventMonth && currentDay > eventDay) {
        throw new Error(`This event took place in ${eventToCheck.date}`);
    }
}

module.exports = {
    checkDate
}