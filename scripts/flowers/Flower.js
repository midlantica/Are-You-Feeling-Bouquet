const Flower = (flowerObj, retailerObj, distributorObj, nurseryObj) => {
  return `
    <section class="flower box marB0">
      <h5 class="flower__name">${flowerObj.name}</h5>
      <h6 class="flower__color">
        <span class="flower--color">Color:</span>
        <span class="toCapitalize">${flowerObj.color}</span>
      </h6>
    </section>
    `
}
export default Flower
