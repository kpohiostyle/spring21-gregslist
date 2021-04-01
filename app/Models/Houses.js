import { generateId } from "../Utils/GenerateId.js"

export default class House {
    constructor(bedrooms, bathrooms, sqFeet, address, price, imgUrl) {
        this.id = generateId()
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.sqFeet = sqFeet
        this.address = address
        this.price = price
        this.imgUrl = imgUrl
    }

    get Template() {
        return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h5 class="card-title">Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</h5>
              <p class="card-text>Square Feet: ${this.sqFeet}</h4>
              <p class="card-text">${this.address} $${this.price.toFixed(2)}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
              <button type="button" class="btn btn-info" onclick="app.housesController.bid('${this.id}')">Bid</button>
          </div>
      </div>
    </div>
    `
    }
}

