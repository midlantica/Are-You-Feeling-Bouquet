let nurseryDistributors = []
export const useNurseryDistributors = () => {
  return nurseryDistributor.slice()
}
export const getNurseryDistributors = () =>
  fetch('http://localhost:8090/nurseryDistributors')
    .then((res) => res.json())
    .then((data) => (nurseryDistributors = data))
