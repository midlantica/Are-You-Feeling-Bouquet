let flowers = []
export const useFlowers = () => {
  return flowers.slice()
}
export const getFlowers = () =>
  fetch('http://localhost:8090/flowers')
    .then((res) => res.json())
    .then((data) => (flowers = data))
