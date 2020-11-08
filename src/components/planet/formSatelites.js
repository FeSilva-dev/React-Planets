import React, {Fragment, useState } from 'react'

const initialState = {
    name: ''
}

const Form = (props) => {
    const [fields, setSatelites] = useState(initialState)
    const handleFieldsChange = (e) => setSatelites({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })
    const handleSubmit = event =>{
        props.addSatelite(fields)
        event.preventDefault()
        setSatelites(initialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" id="id" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form