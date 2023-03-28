import axios from 'axios'

export const getSwapiData = (category) => {
  return axios
    .get(`https://swapi.dev/api/${category}`)
    .then((response) => response.data.results)
    .catch((error) => {
      console.log(error)
    })
}
