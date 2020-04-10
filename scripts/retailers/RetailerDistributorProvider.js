let retailerDistributors = []

export const useRetailerDistributors = () => {
  return retailerDistributors.slice()
}
export const getRetailerDistributors = () =>
  fetch('http://localhost:8090/retailerDistributors')
    .then((res) => res.json())
    .then((data) => (retailerDistributors = data))
