import { setSocioLocationId } from "./TransientState.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInt = +changeEvent.target.value
        setSocioLocationId(convertedToInt)
    }
}


export const LocationTypeChoices = async () => {
    document.addEventListener("change", handleLocationChange)

    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let choicesHTML = "<h2>Which type of area do you live in?</h2>"
    for (const location of locations ) {
        choicesHTML += `<input type='radio' 
                               name='location' 
                               value='${location.id}'/> 
                               ${location.label}`
    }
    
    return choicesHTML
}

