import Car from "./Models/Car.js"
import House from "./Models/Houses.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car('Ford', 'Pinto', 1975, 1000, 'ITS HOT!', 'https://pbs.twimg.com/media/ETpZLKZXgAANyBw.jpg'),
    new Car('AMC', 'Gremlin', 1972, 1200, 'Gremlin Green!', 'https://cdn1.mecum.com/auctions/fl0120/fl0120-395915/images/1-1572992729058@2x.jpg?1574881322000'),
    new Car('Volkswagen', 'Rabbit', 1983, 2990, 'Not an actual rabbit', 'https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b400aba069_-_gti11-lg.jpg'),
    new Car('Zastava', 'Yugo', 1988, 100, 'spome rust', 'https://media.istockphoto.com/photos/old-rusty-red-broken-and-damaged-yugo-car-full-of-junk-parked-and-on-picture-id1056309302?s=612x612')
  ]

  houses = [
    new House('4', '3', '2234', '123 Drive St', 234562, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg?resize=768:*')
  ]

  jobs = []
}

// NOTE Oh oh.. its magic! Ya know!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
