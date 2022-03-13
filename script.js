// Write your JavaScript code here!

window.addEventListener("load", function(e) {
    let form = document.querySelector("form");
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let cargoInput = document.querySelector("input[name=cargoMass]");
    let submitBtn = document.getElementById("formSubmit");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden"

    submitBtn.addEventListener("click", (event) =>{
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
        event.preventDefault();
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
       addDestinationInfo(window.document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

    let inputs = [
        pilotInput,
        copilotInput,
        fuelInput,
        cargoInput
    ]
    
    console.log(pilotStatus.textContent)
});

