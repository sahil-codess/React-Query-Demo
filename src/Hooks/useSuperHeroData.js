import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHero = heroID => {
    return axios.get(`http://localhost:4000/superheroes/${heroID}`)
}
export const useSuperHeroData = (heroID) => {
    return useQuery(['super-hero', heroID], () => fetchSuperHero(heroID))
}