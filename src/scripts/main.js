import { fetchRequests, deleteRequest } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )

}

render()

mainContainer.addEventListener(
    "stateChanged",
    (customEvent) => {
        console.log("State of data has changed. Regenerating HTML...")
        render()
    }
)

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})