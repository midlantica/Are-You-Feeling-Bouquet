import { useFlowers } from '../flowers/FlowerProvider.js'
import { useFlowerRetailers } from '../flowers/FlowerRetailerProvider.js'
// import Flower from '../flowers/Flower.js'
import Retailer from './Retailer.js'
import { useRetailers } from './RetailerProvider.js'

const contentTarget = document.querySelector('.retailers')

const render = (retailersToRender) => {
  const flowerRetailers = useFlowerRetailers()
  const retailers = useRetailers()
  const flowers = useFlowers()

  // Setup Flower Retailers relationship

  contentTarget.innerHTML = retailersToRender
    .map((retailerObj) => {
      // Find related retailer for the current flower
      const foundFlower = flowers.find((flower) => {
        return flower.id === retailerObj.retailerId
      })

      // Find retailer/[s] for the current flower
      let filterRetailersFlower = flowerRetailers.filter(
        (fce) => fce.retailerId === retailerObj.id
      )

      filterRetailersFlower = filterRetailersFlower.map((fce) => {
        return flowers.find((flower) => flower.id === fce.flowerId)
      })

      return Retailer(retailerObj, filterRetailersFlower)
    })
    .join('')
}

export const RetailerList = () => {
  const retailers = useRetailers()

  render(retailers)
}
