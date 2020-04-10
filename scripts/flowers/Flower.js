const Flower = (flowerObj, retailerObj, distributorObj, nurseryObj) => {
  return `
    <section class="flower box">

      <h4 class="flower__name">${flowerObj.name}</h4>
      <p class="flower__color">
        <span class="flower--color">color:</span>
        ${flowerObj.color}
      </p>

      <div class="flower__retailer marTH">
        <p>Retailers:</p>
        <ul>
          ${retailerObj
            .map(
              (retailerObj) => `
                <li>${retailerObj.name}</li>
                <li>${retailerObj.address}</li>
                <li>${retailerObj.city}</li>
                <li>${retailerObj.state}</li>`
            )
            .join('')}
        </ul>
      </div>

      <div class="flower__distributor marTH">
        <p>Retailers:</p>
        <ul>
          ${distributorObj
            .map(
              (distributorObj) => `
                <li>${distributorObj.name}</li>
                <li>${distributorObj.address}</li>
                <li>${distributorObj.city}</li>
                <li>${distributorObj.state}</li>`
            )
            .join('')}
        </ul>
      </div>

      <div class="flower__nursery marTH">
        <p>Retailers:</p>
        <ul>
          ${nurseryObj
            .map(
              (nurseryObj) => `
                <li>${nurseryObj.name}</li>
                <li>${nurseryObj.address}</li>
                <li>${nurseryObj.city}</li>
                <li>${nurseryObj.state}</li>`
            )
            .join('')}
        </ul>
      </div>

    </section>
    `
}
export default Flower
