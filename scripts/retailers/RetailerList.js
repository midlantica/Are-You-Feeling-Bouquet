import { useFlowers } from '../flowers/FlowerProvider.js'
import { useFlowersRetailer } from '../flowers/FlowersRetailerProvider.js'
import Retailer from './Retailer.js'
import { useRetailers } from './RetailerProvider.js'

const contentTarget = document.querySelector('.retailers')

const render = (retailersToRender) => {
  const retailers = useRetailers()
  const flowers = useFlowers()
  let flowersRetailer = useFlowersRetailer()

  // Setup Flower Retailers relationship

  contentTarget.innerHTML = retailersToRender
    .map((retailerObj) => {
      // Find related retailer for the current flower
      const foundFlower = flowers.map((flower) => {
        return flower.id === retailerObj.flowerId
      })

      // Find retailer/[s] for the current flower
      let myRetailersFlowers = flowersRetailer.filter(
        (myX) => myX.retailerId === retailerObj.id
      )

      myRetailersFlowers = myRetailersFlowers.map((myX) => {
        return flowers.find((flower) => flower.id === myX.flowerId)
      })

      return Retailer(retailerObj, myRetailersFlowers)
    })
    .join('')
}

export const RetailerList = () => {
  const retailers = useRetailers()

  render(retailers)
}
