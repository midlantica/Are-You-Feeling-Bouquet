import { getDistributors } from './distributors/DistributorProvider.js'
import { FlowerList } from './flowers/FlowerList.js'
import { getFlowers } from './flowers/FlowerProvider.js'
import { getFlowerRetailers } from './flowers/FlowerRetailerProvider.js'
import { getNurseries } from './nurseries/NurseryProvider.js'
import { RetailerList } from './retailers/RetailerList.js'
import { getRetailers } from './retailers/RetailerProvider.js'

getFlowers()
  .then(getDistributors) //
  .then(getFlowerRetailers)
  .then(getNurseries)
  .then(getRetailers)
  .then(FlowerList)
  .then(RetailerList)
