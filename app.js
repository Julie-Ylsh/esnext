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

        static getDefaultId(){return 'rio - de - janeiro'};
        static getDefaultNom(){return 'Rio de Janeiro'};
        static getDefaultImageUrl(){return 'img / rio - de - janeiro.jpg'};
        

    }

    let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
    console.log(parisTrip);
    console.log(parisTrip.name);
    console.log(parisTrip.toString());

    parisTrip.price = 100;
    console.log(parisTrip.toString());

    const defaultTrip = getDefaultTrip();
    console.getDefaultTrip(defaultTrip);



}

exports.start = start;