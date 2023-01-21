import axios from "axios"
import { useQuery } from "react-query"

const fetchData = () =>{
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const {isLoading, data, isError, error, isFetching, refetch} = useQuery('super-heroes', fetchData,
   { enabled: false})

  console.log({isLoading, isFetching})

  if(isLoading) {
    return <h2>Loading....</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
        <h2>RQ Super Heroes Page</h2>
        <button onClick={refetch}>Fetch Superheroes</button>
        {data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })}
    </>
  )
}
