import { useDistributors } from '../distributors/DistributorProvider.js'
import { useNurseryFlowers } from '../nurseries/NurseryFlowerProvider.js'
import { useNurseries } from '../nurseries/NurseryProvider.js'
import { useRetailers } from '../retailers/RetailerProvider.js'
import Flower from './Flower.js'
import { useFlowers } from './FlowerProvider.js'

const contentTarget = document.querySelector('.flowers')

const render = (flowersToRender) => {
  const nurseries = useNurseries()
  const distributors = useDistributors()
  const nurseryFlowers = useNurseryFlowers()
  const retailers = useRetailers()
  const flowers = useFlowers()

  // Setup Emplyee Retailers relationship

  contentTarget.innerHTML = flowersToRender
    .map((flowerObj) => {
      // Find related nursery for the current flower
      const foundNurseries = nurseries.find((nursery) => {
        return nursery.id === flowerObj.nurseryId
      })

      // Find related distributor for the current flower
      const foundDistributor = distributors.find((distributor) => {
        return distributor.id === flowerObj.distributorId
      })

      // Find Retailer/[s] for the current flower
      // FIRST FILTER
      let foundRetailers = nurseryFlowers.filter(
        (fr) => fr.flowerId === flowerObj.id
      )

      // THEN MAP
      foundRetailers = foundRetailers.map((fr) => {
        return retailers.find((retailer) => retailer.id === fr.retailerId)
      })

      return Flower(
        flowerObj, //
        foundRetailers,
        foundDistributor,
        foundNurseries
      )
    })
    .join('')
}

export const FlowerList = () => {
  const flowers = useFlowers()

  render(flowers)
}
