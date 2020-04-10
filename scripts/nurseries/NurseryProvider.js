let nurseries = []

export const useNurseries = () => {
  return nurseries.slice()
}
export const getNurseries = () =>
  fetch('http://localhost:8090/nurseries')
    .then((res) => res.json())
    .then((data) => (nurseries = data))
