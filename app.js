//Afficher Node = CTRL + ALT + N

function start() {
    let favoriteCityId = 'rome';
    console.log(favoriteCityId);

    favoriteCityId = 'paris';
    console.log(favoriteCityId);

    const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
    console.log(citiesId);

    //citiesId =[];

    citiesId.push('tokyo');
    console.log(citiesId);

    function getWeather(citiesId) {
        city = citiesId.toUpperCase();
        temperature = 20;

        return { city, temperature };
    }

    const weather = getWeather(favoriteCityId);
    console.log(weather);

    let { city: cityWeather, temperature: temperatureWeather } = weather;

    console.log(cityWeather);
    console.log(temperatureWeather);

    //Rest Operator
    const [parisId, nycId, ...otherCitiesId] = citiesId;
    console.log(parisId);
    console.log(nycId);
    console.log(otherCitiesId.length);

    //Classe
    class Trip {
        constructor(id, name, imageUrl) {
            this.id = id;
            this.name = name;
            this.imageUrl = imageUrl;
        }
        toString() {
            return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price + ']';
        }

        get price() {
            return this._price
        }
        set price(newPrice) {
            this._price = newPrice;
        }

        static getDefaultTrip() {
            return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img / rio - de - janeiro.jpg');
        }

    }

    let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
    console.log(parisTrip);
    console.log(parisTrip.name);
    console.log(parisTrip.toString());

    parisTrip.price = 100;
    console.log(parisTrip.toString());

    const defaultTrip = Trip.getDefaultTrip();
    console.log(defaultTrip);


    //Héritage
    class FreeTrip extends Trip {
        constructor(id, name, imageUrl, price) {
            super(id, name, imageUrl);
            this.price = 0;
        }

        toString() {
            return 'Free' + super.toString();
        }

    }

    const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
    console.log(freeTrip.toString());

    //Promise, Set, Map, Arrow Function
    class TripService {
        constructor() {
            // TODO Set of 3 trips
            this._trips = new Set();
            this._trips.add(parisTrip);
            this._trips.add(freeTrip);
            this._trips.add(defaultTrip);
        }

        findByName(tripName) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // ici l'exécution du code est asynchrone
                    // TODO utiliser resolve et reject en fonction du résultat de la recherche
                    let tripFound = false;
                    this._trips.forEach(trip => {
                        if (trip.name == tripName) {
                            tripFound = true;
                            resolve(trip);
                        }
                    });
                    if (!tripFound) {
                        reject(`No trip with name ${tripName}`);
                    }
                }, 2000)
            });
        }
    }

    class PriceService {
        constructor() {
            // TODO Map of 2 trips
            this._priceMap = new Map();
            this._priceMap.set('paris', 100);
            this._priceMap.set('rio-de-janeiro', 800);
        }

        findPriceByTripId(tripId) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // ici l'exécution du code est asynchrone
                    // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    if (this._priceMap.has(tripId)) {

                        resolve(this._priceMap.get(tripId));

                    } else {
                        reject(`No price for trip id ${tripId}`);
                    }
                }, 2000)
            });
        }
    }

    const priceService = new PriceService();
    const tripService = new TripService();

    //Marche
const promiseParis1$ = tripService.findByName('Paris');
promiseParis1$
    .then(trip => console.log(trip))
    .catch((error) => console.error(`Error : ${error}`));

    //Pas marche
    const promiseToulouse$ = tripService.findByName('Toulouse');
    promiseToulouse$
        .then(trip => console.log(trip))
        .catch((error) => console.error(`Error : ${error}`));

    // promesse OK
    const promiseRio$ = priceService.findPriceByTripId('rio-de-janeiro');
    promiseRio$
        .then(price => console.log(`Price found : ${price}`))
        .catch((error) => console.error(`I AM ERROR.\n${error}`));

    // promesse NOK
    const promiseNantes$ = priceService.findPriceByTripId('nantes');
    promiseNantes$
        .then(price => console.log(`Price found : ${price}`))
        .catch((error) => console.error(`I AM ERROR.\n${error}`));

    const promiseParis$ = tripService.findByName('Paris');
    promiseParis$
        .then(trip => priceService.findPriceByTripId(trip.id))
        .then(price => console.log('Price found :', price))
        .catch((error) => console.error(`I AM ERROR.\n${error}`));

}

exports.start = start;