// Write your JavaScript code here!

// const funcs = require('./scriptHelper.js');

window.addEventListener("load", function(e) {
    let form = document.querySelector("form");
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let cargoInput = document.querySelector("input[name=cargoMass]");
    let submitBtn = document.getElementById("formSubmit");
    let list = document.getElementById("faultyItems");
    // let pilotStatus = document.getElementById("pilotStatus");
    // let copilotStatus = document.getElementById("copilotStatus");
    // let fuelStatus = document.getElementById("fuelStatus");
    // let cargoStatus = document.getElementById("cargoStatus");
    // let launchStatus = document.getElementById("launchStatus");
    let mission = document.getElementById("missionTarget");
    list.style.visibility = "hidden"

    submitBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        let proceed = true;
        for(let i = 0; i < inputs.length; i++){
            let input = inputs[i]
            let check = validateInput(input.value)
            

            if(check === "Empty"){
                alert("All fields are required")
                proceed = false;
                break;
            }else if((input === inputs[0] && check === "Is a Number") || (input === inputs[1] && check === "Is a Number")){
                alert("Make sure to enter valid information for each field!");
                proceed = false;
                break; 
            } else if((input === inputs[2] && check === "Not a Number") || (input === inputs[3] && check === "Not a Number")){
                alert("Make sure to enter valid information for each field!");
                proceed = false;
                break;
            }
        };
        if(proceed){
            formSubmission(window.document, list, inputs[0].value, inputs[1].value, inputs[2].value,inputs[3].value)
        }
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(mission, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

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
        let pilotStatus = document.getElementById("pilotStatus");   
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let launchStatus = document.getElementById("launchStatus");

        let ready = true;
        pilotStatus.innerText =`Pilot ${pilot} is ready for launch`;
        copilotStatus.innerText =`Co-pilot ${copilot} is ready for launch`;
    
        if(fuelLevel < 10000){
            launchStatus.innerText =`Shuttle not ready for launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            list.style.visibility = "visible";
            fuelStatus.innerText =`Fuel level to low for launch`;
            ready = false;

        }
        if(cargoLevel > 10000){
            launchStatus.innerText =`Shuttle not ready for launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
            list.style.visibility = "visible";
            cargoStatus.innerText =`Cargo mass too heavy for launch`;
            ready = false;
        }
        
        if(ready){
            launchStatus.innerText =`Shuttle is ready for launch`;
            launchStatus.style.color = "green";
            list.style.visibility = "visible";
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
    
    let inputs = [
        pilotInput,
        copilotInput,
        fuelInput,
        cargoInput
    ]
    
});