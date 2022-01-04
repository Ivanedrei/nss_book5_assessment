const applicationState = {

}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}


export const sendRequest = (userServiceRequest) => {
    //userServiceRequest = dataToSendToApi from serviceform.js
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    const mainContainer = document.querySelector("#container")

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })


}

const mainContainer = document.querySelector("#container")

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// export const fetchPlumbers = () => {
//     return fetch(`${API}/plumbers`)
//         .then(response => response.json())
//         .then(
//             (servicePlumbers) => {
//                 // Store the external state in application state
//                 applicationState.plumbers = servicePlumbers
//             }
//         )
// }

// export const getPlumbers = () => {
//     return applicationState.plumbers.map(plumber => ({ ...plumber }))
// }

// export const sendPlumbers = (userServicePlumber) => {
//     //userServiceRequest = dataToSendToApi from serviceform.js
//     const fetchOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(userServicePlumber)
//     }
//     const mainContainer = document.querySelector("#container")

//     return fetch(`${API}/requests`, fetchOptions)
//         .then(response => response.json())
//         .then(() => {
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//         })


// }

// export const sendCompletion = (completion) => {
//     const fetchOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(completion)
//     }
//     const mainContainer = document.querySelector("#container")
//     return fetch(`${API}/completion`, fetchOptions)
//         .then(response => response.json())
//         .then(() => {
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//         })


// }