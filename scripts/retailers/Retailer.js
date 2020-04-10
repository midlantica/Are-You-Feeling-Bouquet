const Retailer = (retailerObj, flowerArray) => {
  return `
    <section class="retailer box">
      <h4 class="retailer__name">${retailerObj.name}</h4>
      <p>Retailers:</p>
      <ul>
        ${flowerArray
          .map(
            (flowerArray) =>
              `<li>${flowerArray.firstName} ${flowerArray.lastName}</li>`
          )
          .join('')}
      </ul>
      </div>
    </section>
    `
}
export default Retailer
