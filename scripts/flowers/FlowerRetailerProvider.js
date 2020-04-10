let flowerRetailers = []
export const useFlowerRetailers = () => {
  return flowerRetailers.slice()
}
export const getFlowerRetailers = () =>
  fetch('http://localhost:8090/flowerRetailers')
    .then((res) => res.json())
    .then((data) => (flowerRetailers = data))
