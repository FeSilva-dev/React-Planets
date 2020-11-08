import React, { useState, useEffect } from 'react'
import Gray from '../shared/gray'
import Description from '../shared/description'
import Form from '../planet/formSatelites'
import { Link } from 'react-router-dom'

async function getSatelites(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}

const Planet = (props) => {
    const[satelites, setSatelites] = useState([])

    const addSatelite = (newSatelite) => {
        setSatelites([...satelites, newSatelite])
    }

    useEffect(() => {
        getSatelites(props.id).then(data => {
            setSatelites(data['satellites'])
        })
    }, []) // passamos a , e o colchetes depois do useEffect para evitar que o componente renderize novamente toda vez que houver uma atualizaçao de estado

    return(
        <div>
            <Link to={`/planet/${props.id}`}><h4>{props.name}</h4></Link>
            <Description description={props.description} url={props.url}/>
            <Gray img_url={props.img_url} />  
            <h4>Satelites</h4>
            <hr/>
            <Form addSatelite={addSatelite} />
            <hr/>
            <ul>
                {satelites.map((satelite, index) =>
                    <li key={index}>{satelite.name}</li> 
                )}
            </ul>
            <hr/>
        </div>
    )
}

export default Planet;