import React, { Fragment, useState, useEffect } from 'react'
import Planet from '../planet/planet'
import Form from './form'

async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

const Planets = (props) => {

    const[planets, setPlanets] = useState([])

    const addPlanet = (newPlanet) => {
        setPlanets([...planets, newPlanet])
    }

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    return(
        <Fragment>
            <h3>Planet List</h3>
            <Form addPlanet={addPlanet} />
            <hr/>
            {planets.map((planets, index) => 
                <Planet key={index} id={planets.id} name={planets.name} description={planets.description} url={planets.url} img_url={planets.img_url} i/>
            )}
        </Fragment>
    );
}

export default Planets