import React, { useState, useEffect } from 'react'
import Gray from '../components/shared/gray'
import Description from '../components/shared/description'
import {useParams, Link, Redirect } from 'react-router-dom'

async function getPlanet(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}

const Single = () => {
    const [satelites, setSatelites] = useState([])
    const [planet, setPlanet] = useState({})
    const [redirect, setRedirect] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatelites(data['satellites'])
            setPlanet(data['data'])
        }, error => {
            setRedirect(true)
        })
    }, []) // passamos a , e o colchetes depois do useEffect para evitar que o componente renderize novamente toda vez que houver uma atualizaçao de estado

    if(redirect)
    return <Redirect to='/'/>

    return(
        <div>
            <h4>{planet.name}</h4>
            <Description description={planet.description} url={planet.link}/>
            <Gray img_url={planet.img_url} />  
            <h4>Satelites</h4>
            <ul>
                {satelites.map((satelite, index) =>
                    <li key={index}>{satelite.name}</li> 
                )}
            </ul>
            <hr/>
            <Link to='/'>Voltar para a listagem</Link>
        </div>
    )
}

export default Single;