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
