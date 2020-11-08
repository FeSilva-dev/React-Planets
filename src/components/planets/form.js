import React, {Fragment, useState } from 'react'

const Form = (props) => {

    const initialState = {
        name: '',
        description: '',
        url: '',
        img_url: ''
    }

    const [fields, setFields] = useState({initialState})

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault()
        setFields(initialState)
    }
    
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="description">Descrição: </label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="url">Site complementar: </label>
                    <input id="url" type="text" name="url" value={fields.url} onChange={handleFieldsChange}/>
                </div>
                <div>
                    <label htmlFor="img_url">Link da imagem: </label>
                    <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
                </div>
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        </Fragment>
    )
}

export default Form