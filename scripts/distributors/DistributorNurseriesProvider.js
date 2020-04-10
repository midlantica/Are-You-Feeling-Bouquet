let distributorNurseries = []

export const useDistributorNurseries = () => {
  return distributorNurseries.slice()
}
export const getDistributorNurseries = () =>
  fetch('http://localhost:8090/distributorNurseries')
    .then((res) => res.json())
    .then((data) => (distributorNurseries = data))
