import getDistributors from './distributors/DistributorProvider.js'
import getFlowers from './flowers/FlowerProvider.js'
import getNursery from './nurseries/NurseryProvider.js'
import getRetailer from './retailers/RetailerProvider.js'

getFlowers()
  .then(getDistributors) //
  .then(getNursery)
  .then(getRetailer)
  .then(getFlowerList)
  .then(getRetailersList)
