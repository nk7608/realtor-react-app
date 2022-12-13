import axios from "axios";

export const baseUrl = "http://forward-reverse-geocoding.p.rapidapi.com/v1/forward"


export const fetchApi = aysnc (url) => {
     const {data} = await axios.get((url), {
          headers: {
               'X-RapidAPI-Key': '485ac34546msha3de98b0bd7ed60p1fb377jsnc2ce22b6f09d',
               'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
             }

     })
}