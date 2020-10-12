import axios from "axios"


const URL = "https://www.themealdb.com/api/json/v1/1/";

export function randomMeal() {
  return axios.get(URL + "random.php");
}

export function showResult(query) {
  return axios.get(URL + `search.php?s=${query}`);
}

export function showDetails(id) {
  
return axios.get(URL+ `lookup.php?i=${id}`)

}


    