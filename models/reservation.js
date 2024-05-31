class Reservation {
    #id;
    #firstName;
    #lastName;
    #email;
    #eventId;

    constructor(id, firstName, lastName, email, eventId) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#eventId = eventId;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }



    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value;
    }



    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        this.#lastName = value;
    }



    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }



    get eventId() {
        return this.#eventId;
    }

    set eventId(value) {
        this.#eventId = value;
    }

}

module.exports = Reservation;