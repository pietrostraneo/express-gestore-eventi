# Express Gestore Eventi

Il nostro obiettivo è creare un'API per un'applicazione che gestirà degli eventi con le relative prenotazioni. Proseguiamo per milestone in modo da avere tutto sotto controllo.

## Milestone 1

Creiamo le seguenti rotte con relativo controller e router senza implementare le funzioni del controller.

- [GET] `/events/` (index)
- [POST] `/events/` (store)
- [PUT] `/events/:event` (update)

## Milestone 2

Creiamo il model `models/event.js` e prevediamo le seguenti proprietà:

- `id`
- `title`
- `description`
- `date`
- `maxSeats` (numero massimo di posti)

Tramite dei metodi statici, facciamo in modo di poter leggere e salvare i dati su un file JSON dedicato. Un’istanza della classe rappresenterà un singolo evento.

## Milestone 3

Usiamo il model nelle funzioni scritte nei controller e facciamo in modo che, tramite dei metodi statici del model, possiamo recuperare uno (tramite `id`) o tutti gli eventi. Prevediamo la possibilità di passare dei filtri tramite query string alla rotta index.

## Milestone 4

Gestiamo eventuali errori 404 e 500 tramite dei middleware dedicati.

## Bonus

- Creiamo le seguenti rotte per gestire le prenotazioni:
  - [GET] `/events/:event/reservations` (index)
  - [POST] `/events/:event/reservations` (store)
  - [DELETE] `/events/:event/reservations/:reservation` (destroy)
  
- Creiamo il model `models/reservation.js` e prevediamo le seguenti proprietà:
  - `id`
  - `firstName`
  - `lastName`
  - `email`
  - `eventId`
  
- Nel model degli eventi, prevediamo una funzione per recuperare tutte le prenotazioni associate.

- Creiamo dei setter per ogni proprietà dei nostri model ed implementiamo una validazione dei dati ricevuti. Nel caso, lanciamo un errore.

- Creiamo degli errori personalizzati estendendo la classe Error.

- Non permettiamo di aggiungere o togliere una prenotazione per un evento già passato.

- Non permettiamo di aggiungere una prenotazione ad evento senza più posti disponibili.

Buon Lavoro 💪