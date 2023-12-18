import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const LocationsHTML = await LocationTypeChoices()
    const saveSubmissionsHTML = SaveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${LocationsHTML}
        ${saveSubmissionsHTML}
        ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()
