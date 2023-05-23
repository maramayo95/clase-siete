import {useEffect,useState} from 'react'

const Desafio7 = () => {
    const [data,setData] = useState({})
    const [cargando, setCargando] = useState(false)


    const url = 'https://animechan.vercel.app/api/random'

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setData(res)
            setCargando(true)
        } )
    },[])
    

  return (
    <div>
        {
            cargando? (
            <div>
                <h3>{data.anime}</h3>
                <h4>{data.character}</h4>
                <p>{data.quote}</p>
            </div>    
            ) : (<h3>Cargando...</h3>)

        }
    </div>
  )
}

export default Desafio7