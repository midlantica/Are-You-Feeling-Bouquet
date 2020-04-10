const Nursery = (nurseryObj, flowerArray) => {
  return `
    <section class="nursery box">
      <h4 class="nursery__name">${nurseryObj.name}</h4>
      <p>Flowers:</p>
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
export default Nursery
