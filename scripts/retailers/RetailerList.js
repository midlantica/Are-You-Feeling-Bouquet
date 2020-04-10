import { useFlowers } from '../flowers/FlowerProvider.js'
import { useNurseryFlowers } from '../nurseries/NurseryFlowerProvider.js'
// import Flower from '../flowers/Flower.js'
import Retailer from './Retailer.js'
import { useRetailers } from './RetailerProvider.js'

const contentTarget = document.querySelector('.retailers')

const render = (retailersToRender) => {
  const nurseryflowers = useNurseryFlowers()
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
      let nurseryFlower = nurseryflowers.filter(
        (fce) => fce.retailerId === retailerObj.id
      )

      nurseryFlower = nurseryFlower.map((fce) => {
        return flowers.find((flower) => flower.id === fce.flowerId)
      })

      return Retailer(retailerObj, nurseryFlower)
    })
    .join('')
}

export const RetailerList = () => {
  const retailers = useRetailers()

  render(retailers)
}
