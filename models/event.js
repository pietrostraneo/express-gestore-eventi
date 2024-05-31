class Event {
    #id;
    #title;
    #description;
    #date;
    #maxSeats;

    constructor(id, title, description, date, maxSeats) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#date = date;
        this.#maxSeats = maxSeats;
    }

    get id() {
        return this.#id;
    }
    get title() {
        return this.#title;
    }
    get description() {
        return this.#description;
    }
    get date() {
        return this.#date;
    };
    get maxSeats() {
        return this.#maxSeats;
    }

    set id(value) {
        this.#id = value;
    }
    set title(value) {
        this.#title = value;
    }
    set description(value) {
        this.#description = value;
    }
    set date(value) {
        this.#date = value;
    }
    set maxSeats(value) {
        this.#maxSeats = value;
    }

}

module.exports = Event;