import { getRequests } from "./dataAccess.js"
// import { getRequests, getPlumbers, sendCompletion } from "./dataAccess.js"

const convertRequestToListElement = (request) => {
    return `<li class="description">
            ${request.description} at ${request.address} has a ${request.budget}, and needs the job to be done by ${request.neededBy}
            <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
        </li>`
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement)
        }
        </ul>
    `

    return html
}

// const plumbers = getPlumbers()

//     `<select class="plumbers" id="plumbers">
//     <option value="">Choose</option>
//     ${plumbers.map(
//         plumber => {
//             return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
//         }
//     ).join("")
//     }
// </select>`

// mainContainer.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.id === "plumbers") {
//             const [requestId, plumberId, date_created] = event.target.value.split("--")

//             /*
//                 This object should have 3 properties
//                    1. requestId
//                    2. plumberId
//                    3. date_created
//             */
//             const completion = [requestId, plumberId, date_created]
//             sendCompletion(completion)
//         }

//         /*
//             Invoke the function that performs the POST request
//             to the `completions` resource for your API. Send the
//             completion object as a parameter.
//          */

//     }
//     }
// )