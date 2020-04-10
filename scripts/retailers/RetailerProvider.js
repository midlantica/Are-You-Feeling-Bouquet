let retailers = []

export const useRetailers = () => {
  return retailers.slice()
}
export const getRetailers = () =>
  fetch('http://localhost:8090/retailers')
    .then((res) => res.json())
    .then((data) => (retailers = data))
