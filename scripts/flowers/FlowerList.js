import { useDistributors } from '../distributors/DistributorProvider.js'
import { useNurseries } from '../nurseries/NurseryProvider.js'
import { useRetailers } from '../retailers/RetailerProvider.js'
import Flower from './Flower.js'
import { useFlowers } from './FlowerProvider.js'
import { useFlowerRetailers } from './FlowerRetailerProvider.js'

const contentTarget = document.querySelector('.flowers')

const render = (flowersToRender) => {
  const nurseries = useNurseries()
  const distributor = useDistributors()
  const flowerRetailers = useFlowerRetailers()
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
      const foundDistributor = distributor.find((distributor) => {
        return distributor.id === flowerObj.distributorId
      })

      // ###################
      // Find customer/[s] for the current flower
      let filterFlowerRetailers = flowerRetailers.filter(
        (fec) => fec.flowerId === flowerObj.id
      )

      filterFlowerRetailers = filterFlowerRetailers.map((ffr) => {
        return flowers.find((flower) => flower.id === ffr.flowerId)
      })

      return Flower(
        flowerObj,
        foundNurseries,
        foundDistributor,
        foundLocation,
        filterFlowerRetailers
      )
    })
    .join('')
}

export const FlowerList = () => {
  const flowers = useFlowers()

  render(flowers)
}
