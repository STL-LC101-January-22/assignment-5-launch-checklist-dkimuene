// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.innerHTML = `<h2>Mission Destination</h2>
                            <ol>
                                <li>Name: ${name}</li>
                                <li>Diameter: ${diameter}</li>
                                <li>Star: ${star}</li>
                                <li>Distance from Earth: ${distance}</li>
                                <li>Number of Moons: ${moons}</li>
                            </ol>
                        <img src="${imageUrl}">
    
    `
 }

function validateInput(testInput) {
    if(testInput !== ''){
        const parsed = parseInt(testInput);
        if(isNaN(parsed)){
            return "Not a Number";
        }else {
            return "Is a Number";
        }
    }else {
        return "Empty";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let ready = true;
    pilotStatus.innerText =`Pilot ${pilot} is ready for launch`;
    copilotStatus.innerText =`Co-pilot ${copilot} is ready for launch`;

    if(fuelLevel < 10000){
        list.style.visibility = "visible";
        fuelStatus.innerText =`Fuel level to low for launch`;
        ready = false;

    }
    if(cargoLevel > 10000){
        list.style.visibility = "visible";
        cargoStatus.innerText =`Cargo mass too heavy for launch`;
        ready = false;
    }
    
    if(ready){
        launchStatus.innerText =`Shuttle is ready for launch`;
        launchStatus.style.color = "green";
        list.style.visibility = "visible";
    }else {
        launchStatus.innerText =`Shuttle not ready for launch`;
        launchStatus.style.color = "red";

    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
        
    }) 
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports = {
    addDestinationInfo: addDestinationInfo,
    validateInput: validateInput,
    formSubmission: formSubmission,
    pickPlanet: pickPlanet, 
    myFetch: myFetch
}
// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
