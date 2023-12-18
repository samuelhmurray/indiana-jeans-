import { setOwnsBlueJeans } from "./TransientState.js"

 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}

export const OwnJeansChoices = () => {
    document.addEventListener("change", handleOwnershipChange)

    let html = "<h2>Do you own a pair of jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true' /> Yes"
    html += "<input type='radio' name='ownsJeans' value='false' /> No"
    
    return html
}