//Afficher Node = CTRL + ALT + N
let favoriteCityId = 'rome';
console.log(favoriteCityId);

favoriteCityId = 'paris';
console.log(favoriteCityId);

const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
console.log(citiesId);

//citiesId =[];

citiesId.push('tokyo');
console.log(citiesId);

function getWeather (citiesId) {
    city: citiesId.toUpperCase,
    temperature=20;

    return (city + temperature);
}

const weather = getWeather(favoriteCityId);