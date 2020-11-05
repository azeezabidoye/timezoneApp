
const api = {
    baseUrl: 'https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/' 
}

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('keypress', setQuery);

function setQuery (e) {
    if (e.keyCode === 13) {
        getResult(searchBox.value);
    }
}

function getResult (query) {
    fetch (`${api.baseUrl}/ip/${query}`)
    .then (data => {
        return data.json()
    }).then (displayResults);
}

function displayResults (data) {
    let timeZone = document.querySelector('.timezoneDisplay');
    let currentDate = document.querySelector('.timeDisplay');
    timeZone.innerText = `${data.timezone}`;
    currentDate.innerText = `${data.datetime}`;
}