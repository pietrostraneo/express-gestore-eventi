const fs = require('fs');
const path = require('path');
const { cwd } = require('process');


// Event model class
class Event {
    // Private properties
    #id; // Unique identifier for the event
    #title; // Title of the event
    #description; // Description of the event
    #date; // Date of the event
    #maxSeats; // Maximum number of seats available for the event

    // Constructor for Event objects
    constructor(id, title, description, date, maxSeats) {
        // Initialize properties of the Event object
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#date = date;
        this.#maxSeats = maxSeats;
    }



    // Getter for the id property
    get id() {
        return this.#id;
    }

    // Setter for the id property
    set id(value) {
        this.#id = value;
    }



    // Getter for the title property
    get title() {
        return this.#title;
    }

    // Setter for the title property
    set title(value) {
        this.#title = value;
    }



    // Getter for the description property
    get description() {
        return this.#description;
    }

    // Setter for the description property
    set description(value) {
        this.#description = value;
    }



    // Getter for the date property
    get date() {
        return this.#date;
    }

    // Setter for the date property
    set date(value) {
        this.#date = value;
    }



    // Getter for the maxSeats property
    get maxSeats() {
        return this.#maxSeats;
    }

    // Setter for the maxSeats property
    set maxSeats(value) {
        this.#maxSeats = value;
    }

    static readFile(filename) {
        let filePath = path.join(process.cwd(), 'db', filename + '.json')
        let data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

    static writeFile(filename, newEvent) {
        let filePath = path.join(process.cwd(), 'db', filename + '.json')
        let data = JSON.stringify(newEvent);
        fs.writeFileSync(filePath, data);
        return 'Evento aggiunto';
    }
}

const event = new Event(1, "Matrimonio", "description", "20/05/2024", 20);

console.log(event);
// Export the Event model class
module.exports = Event;