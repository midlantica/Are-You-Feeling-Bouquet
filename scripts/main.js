import { getDistributorNurseries } from './distributors/DistributorNurseriesProvider.js'
import { getDistributors } from './distributors/DistributorProvider.js'
import { FlowerList } from './flowers/FlowerList.js'
import { getFlowers } from './flowers/FlowerProvider.js'
import { getNurseryDistributors } from './nurseries/NurseryDistributorProvider.js'
import { getNurseryFlowers } from './nurseries/NurseryFlowerProvider.js'
import { getNurseries } from './nurseries/NurseryProvider.js'
import { getRetailerDistributors } from './retailers/RetailerDistributorProvider.js'
import { RetailerList } from './retailers/RetailerList.js'
import { getRetailers } from './retailers/RetailerProvider.js'

getFlowers()
  .then(getDistributors) //
  .then(getNurseryFlowers)
  .then(getNurseries)
  .then(getRetailers)
  .then(getDistributorNurseries)
  .then(getNurseryDistributors)
  .then(getRetailerDistributors)
  .then(FlowerList)
  .then(RetailerList)
