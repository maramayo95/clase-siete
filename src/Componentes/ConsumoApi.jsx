import {useState,useEffect} from 'react'

const ConsumoApi = () => {
 
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const url = "https://randomuser.me/api"

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setData(res.results[0])
            setLoading(true)
        } )
    },[])

 
   
    return (
        <>
         {
            loading ? (<h1>{data.name.first}</h1>)  : (<h1>Loading...</h1>)
        } 
        
        </>
   
  )
}

export default ConsumoApi