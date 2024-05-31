const Event = require('./event');

test('dovrebbe ritornare un id', () => {
    const event = new Event(1, "Matrimonio", "description", "20/05/2024", 20);
    expect(event.id).toBe(1);
    expect(typeof event.id).toBe('number');
})

test('dovrebbe ritornare un titolo', () => {
    const event = new Event(1, "Matrimonio", "description", "20/05/2024", 20);
    expect(event.title).toBe('Matrimonio');
    expect(typeof event.title).toBe('string');
})

test('dovrebbe ritornare una description', () => {
    const event = new Event(1, "Matrimonio", "description", "20/05/2024", 20);
    expect(event.description).toBe('description');
    expect(typeof event.description).toBe('string');
})

test('dovrebbe ritornare una data', () => {
    const event = new Event(1, "Matrimonio", "description", "20/05/2024", 20);
    expect(event.date).toBe('20/05/2024');
})

test('dovrebbe ritornare un numero', () => {
    const event = new Event(1, "Matrimonio", "description", "20/05/2024", 20);
    expect(event.maxSeats).toBe(20);
    expect(typeof event.maxSeats).toBe('number');
})