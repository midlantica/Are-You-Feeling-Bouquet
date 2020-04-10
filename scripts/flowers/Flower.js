const Flower = (flowerObj, retailerObj, distributorObj, nurseryObj) => {
  return `
    <section class="flower box marB0">

      <h4 class="flower__name">${flowerObj.name}</h4>
      <p class="flower__color">
        <span class="flower--color">color:</span>
        ${flowerObj.color}
      </p>
    </section>
    `
}
export default Flower
