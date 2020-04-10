let distributors = []

export const useDistributors = () => {
  return distributors.slice()
}
export const getDistributors = () =>
  fetch('http://localhost:8090/distributors')
    .then((res) => res.json())
    .then((data) => (distributors = data))
