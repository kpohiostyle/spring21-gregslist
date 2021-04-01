import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";


//Private
function _draw() {
    // What are we drawing
    let houses = ProxyState.houses
    let template = ''
    // if a collection itterate over collection to generate template for each object
    houses.forEach(house => {

        template += house.Template
    })
    // render to page
    document.getElementById('houses').innerHTML = template
}

//Public
export default class HousesController {
    constructor() {
        // OH oh more magic. you still know.....
        // 1st argument is name of the property in the AppState to 'watch' for changes
        // 2nd argument: name of the function to run when 1st argument property changes
        ProxyState.on('houses', _draw);

        // manually run draw the on page load
        _draw()
    }


    createHouse() {
        // if this method is triggered by an event (submit event) prevent the default action of reloding the page
        window.event.preventDefault()
        // grab the element from html that triggered this event
        const form = window.event.target

        let newHouse = {
            // @ts-ignore
            bedrooms: form.bedrooms.value,
            // @ts-ignore
            bathrooms: form.bathrooms.value,
            // @ts-ignore
            sqFeet: form.sqFeet.value,
            // @ts-ignore  this converts the string to a number
            address: form.address.value,
            // @ts-ignore
            price: parseInt(form.price.value),
            // @ts-ignore
            imgUrl: form.imgUrl.value
        }
        housesService.createHouse(newHouse)

        // @ts-ignore
        form.reset()

        // get the modal and close (using jQuery's "$" selector) 
        $('#new-house-form').modal('hide')
    }

    deleteHouse(id) {
        housesService.deleteHouse(id)
    }

    bid(id) {
        housesService.bid(id)
    }

}