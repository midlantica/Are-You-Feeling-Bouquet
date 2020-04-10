let nurseryFlowers = []
export const useNurseryFlowers = () => {
  return nurseryFlowers.slice()
}
export const getNurseryFlowers = () =>
  fetch('http://localhost:8090/nurseryFlowers')
    .then((res) => res.json())
    .then((data) => (nurseryFlowers = data))
