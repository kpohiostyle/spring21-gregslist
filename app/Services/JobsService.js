import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";


class JobsService {
    createJob(newJob) {

        let job = new Job(newJob.title, newJob.description, newJob.payRate, newJob.hours, newJob.company)
        ProxyState.jobs = [...ProxyState.jobs, job]
    }
    // bid(id) {
    //     // find the Car
    //     let job = ProxyState.jobs.find(job => job.id === id)
    //     // make the change
    //     job.price += 100

    //     // trigger the cycle (this can only be the top level properties of ProxyState) to update the page
    //     ProxyState.jobs = ProxyState.jobs
    // }
    deleteJob(id) {
        // remove the car with that id from the array
        // trigger the update cycle by setting the value of ProxyState.cars

        // NOTE filter itterates over an array and only keeps things where the statement provided is true
        // here we remove the car with the id by only keeping cars that do not have that id
        // then we set the ProxyState array back to the result after the filter
        ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
    }

}

export const jobsService = new JobsService();