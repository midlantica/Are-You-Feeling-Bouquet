const Distrubtor = (flowerObj, retailerArray) => {
  return `
    <section class="customer box">
      <h4 class="customer__name">${flowerObj.name}</h4>
      <p>Employees assigned to:</p>
      <ul>
        ${retailerArray
          .map(
            (retailerArray) =>
              `<li>${retailerArray.firstName} ${retailerArray.lastName}</li>`
          )
          .join('')}
      </ul>
      </div>
    </section>
    `
}
export default Distrubtor
