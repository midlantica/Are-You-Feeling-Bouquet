let flowersRetailer = []
export const useFlowersRetailer = () => {
  return flowersRetailer.slice()
}
export const getFlowersRetailer = () =>
  fetch('http://localhost:8090/flowersRetailer')
    .then((res) => res.json())
    .then((data) => (flowersRetailer = data))
