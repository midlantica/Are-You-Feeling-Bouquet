const Retailer = (retailerObj, flowerArray) => {
  return `
    <section class="retailer box">
      <h5 class="retailer__name marTQ">${retailerObj.name}</h5>
      <p><b>Flowers sold:</b></p>
      <ul>
        ${flowerArray
          .map((flowerArray) => `<li>${flowerArray.name}</li>`)
          .join('')}
      </ul>
      </div>
    </section>
    `
}
export default Retailer
