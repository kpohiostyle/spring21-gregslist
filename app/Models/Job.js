import { generateId } from "../Utils/GenerateId.js"

export default class House {
    constructor(title, description, payRate, hours, company) {
        this.id = generateId()
        this.title = title
        this.description = description
        this.payRate = payRate
        this.hours = hours
        this.company = company
    }

    get Template() {
        return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
          <div class="card-body">
          <h4 class = "card-title">${this.title}</h4>
              <h5 class="card-text">${this.description} | ${this.payRate.toFixed(2)}</h5>
              <p class="card-text">${this.company}</p>
          </div>
          <div class="px-3 pb-3 d-flex justify-content-between">
              <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
              
          </div>
      </div>
    </div>
    `
    }
}