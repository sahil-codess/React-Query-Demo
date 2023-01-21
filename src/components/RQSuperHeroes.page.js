import axios from "axios"
import { useQuery } from "react-query"

const fetchData = () =>{
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const {isLoading, data} = useQuery('super-heroes', fetchData)

  if(isLoading) {
    return <h2>Loading....</h2>
  }
  return (
    <>
        <h2>RQ Super Heroes Page</h2>
        {data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })}
    </>
  )
}